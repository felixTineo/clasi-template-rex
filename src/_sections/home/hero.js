import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { SearchForm, FormCode } from '../../_components/forms'
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { DownCircleFilled } from '@ant-design/icons';

const MainCont = styled.section`
  position: relative;
  min-height: calc(100vh - 82px);
  position: relative;
  color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    align-items: center;    
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 107px;
  @media(min-width: 768px){
    //padding-top: 0;
    height: calc(100vh - 166.7px - 174.72px);
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1rem;
  }
`
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  @media(min-width: 768px){
    height: calc(100vh - 166.7px - 174.72px);
  }
`
const ButtonContainer = styled.div`

`
const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  @media(min-width: 768px){
    max-width: 100%;
    font-size: 2.5rem;
    text-align: left;
  }
`
const FormSelectButton = styled.button`
  color: ${props => props.active ?  props.theme.main.primaryColor : '#ADADAD'};
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export default ()=> {
  const state = useContext(Context);
  const [searchByCode, setSearchByCode] = useState(false);
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <TitleContainer>
              <Title>
                {state.home.hero.title}
              </Title>
              <Row style={{ width: "100%" }}>
                <Col xs={12} md={6}>
                  <FormSelectButton active={!searchByCode} onClick={()=> setSearchByCode(false)}>
                    Buscar propiedades
                    {
                      !searchByCode && <DownCircleFilled style={{ marginLeft: 8 }} />
                    }
                  </FormSelectButton>
                </Col>
                <Col xs={12} md={6}>
                  <FormSelectButton active={searchByCode} onClick={()=> setSearchByCode(true)}>
                    Buscar por código
                    {
                      searchByCode && <DownCircleFilled style={{ marginLeft: 8 }} />
                    }                    
                  </FormSelectButton>
                </Col>                
              </Row>
            </TitleContainer>
          </Col>
          <Hidden xs>
            <Col xs={12} md={7}>
              <HeroImage src="/hero.jpg" />
            </Col>          
          </Hidden>
        </Row>
      </Container>
      {
        searchByCode
        ?(
          <FormCode />
        )
        :(
          <SearchForm />
        )
      }
    </MainCont>
  )
}