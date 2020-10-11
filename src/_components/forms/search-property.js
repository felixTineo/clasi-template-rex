import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Select, Input } from '../inputs';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { IconButton, Button } from '../buttons'
import { SearchOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

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
  return(
    <Fragment>
      {console.log("IS PROPERTY", property)}
      <Form onSubmit={e=> e.preventDefault()}>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Select
                default="Operación"
                options={["opcion 1", "opcion 2", "opcion 3"]}
                gray
                vertical={false}
              />          
            </Col>
            <Col xs={12} md={3}>
              <Select
                default="Propiedad"
                options={["opcion 1", "opcion 2", "opcion 3"]}
                gray
                vertical={false}
              />          
            </Col>        
            <Col xs={12} md={3}>
              <Input
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
                  <Input placeholder="Desde" primary />
                </Col>
                <Col xs={12} md={2}>
                  <Input placeholder="Desde" primary />
                </Col>
                <Col xs={12} md={2}>
                  <Select
                    default="Dormitorios"
                    options={["opcion 1", "opcion 2", "opcion 3"]}
                    primary
                    vertical={false}
                  />         
                </Col>
                <Col xs={12} md={2}>
                  <Select
                    default="Baños"
                    options={["opcion 1", "opcion 2", "opcion 3"]}
                    primary
                    vertical={false}
                  />         
                </Col>
                <Col xs={12} md={2}>
                  <Select
                    default="Divisa"
                    options={["opcion 1", "opcion 2", "opcion 3"]}
                    primary
                    vertical={false}
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