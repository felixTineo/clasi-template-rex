import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Select, Input, Autocomplete } from '../inputs';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { IconButton, Button } from '../buttons'
import { SearchOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigateForm } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { getSearchParams } from 'gatsby-query-params';

const Form = styled.form`
  background-color: ${props => props.theme.main.primaryColor};
  width: 100%;
  padding: 8.5vh 0;
`

const Filters = styled.div`
  background-color: #fff;
  padding: 8.5vh 0;
  border-bottom: 1px solid ${props => props.theme.main.primaryColor};
`
const FormSelectButton = styled.button`
  margin: 1rem 0;
  color: ${props => props.theme.main.primaryColor};
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`

export default ({ property }) => {
  const [filter, setFilter] = useState(false);
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });
  const params = getSearchParams();  

  useEffect(()=>{
    if(params){
      setInitial({...params });
    }
  },[params]);
  return(
    <Fragment>
      <Form onSubmit={e=> { e.preventDefault(); onFinish(); }}>
        <Container>
          <Row>
            <Col xs={12} md={3}>         
              <Select
                id="operation"
                onChange={onChange}        
                value={values.operation}          
                default="Operación"
                options={["VENTA", "ARRIENDO"]}
                gray
                capitalize
              />              
            </Col>
            <Col xs={12} md={3}>
              <Select
                id="propertyType"
                onChange={onChange}
                value={values.propertyType}
                default="Propiedad"
                options={PROPERTY_TYPE}
                gray
                capitalize
              />                   
            </Col>        
            <Col xs={12} md={3}>
            <Autocomplete
              id="commune"
              onSelect={onChange}
              selected={values.commune}
              options={COMMUNES.map(val => val.name)}
              placeholder="Comuna"
            />
            </Col>            
            <Col xs={12} md={3}>
              <IconButton
                icon={SearchOutlined}
              >
                Buscar
              </IconButton>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container>
        {
          filter && (
            <Filters>
              <Row>
                <Col xs={12} md={2}>
                  <Input
                    id="priceMin"
                    value={values.priceMin}
                    onChange={onChange}
                    type="number"
                    min={0}
                    placeholder="Desde"
                    primary
                  />                  
                </Col>
                <Col xs={12} md={2}>
                  <Input
                    id="priceMax"
                    value={values.priceMax}
                    onChange={onChange}
                    type="number"
                    min={0}                
                    placeholder="Hasta"
                    primary
                  />    
                </Col>
                <Col xs={12} md={2}>
                  <Input
                    id="bedrooms"
                    value={values.bedrooms}
                    onChange={onChange}
                    type="number"
                    min={0}                
                    placeholder="Habitaciones"
                    primary
                  />         
                </Col>
                <Col xs={12} md={2}>
                  <Input
                    id="bathrooms"
                    value={values.bathrooms}
                    onChange={onChange}
                    type="number"
                    min={0}                
                    placeholder="Baños"
                    primary
                  />         
                </Col>
                <Col xs={12} md={2}>
                  <Select
                    id="currency"
                    value={values.currency}
                    onChange={onChange}
                    default="Divisa"
                    options={["CLP", "UF"]}
                    gray
                    primary
                  />                     
                </Col>
                <Col xs={12} md={2}>
                  <Button block primary rounded>
                    Aplicar filtros
                  </Button>
                </Col>                                                            
              </Row>
            </Filters>            
          )
        }
        {
          property && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {
                filter
                ?(
                <FormSelectButton onClick={()=> setFilter(false)}>
                  <CloseCircleOutlined style={{ marginRight: 8 }} />
                  Menos filtros
                </FormSelectButton>            
                )
                :(
                <FormSelectButton onClick={()=>setFilter(true)}>
                  <PlusCircleOutlined style={{ marginRight: 8 }} />
                  Más filtros
                </FormSelectButton> 
                )
              }
            </div>
          )
        }
      </Container>
    </Fragment>
  )
}