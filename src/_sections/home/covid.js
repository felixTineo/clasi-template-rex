import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { navigate } from 'gatsby';

const MainCont = styled.section`  
  position: relative;
  //padding-bottom: 6rem;
`
const HeroInfoCont = styled.div`
  background-color: transparent;
  min-height: calc(50vh - 4rem);
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;  
  height: 100%;
  //padding: 4rem 3rem;
`
const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 0;
  color: ${props => props.theme.main.primaryColor};
`
const SubTitle = styled.p`
  margin-top: 0;
  //font-size: .8rem;
`
const Description = styled.ul`
  color: #666;
  list-style: initial;
  padding-left: 2rem;
  margin: .5rem 0;
`
const ListItem = styled.li`

`
const Footer = styled.p`
  //text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`
const HeroImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  @media(min-width: 578px){
    justify-content: center;
    align-items: center;
  }
`
const HeroImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-fit: center;
`


export default ()=> {
  const state = useContext(Context).home;
  const builderId = useContext(Context).builderId;
  return(
    <Container>
    <MainCont>
      <HeroInfoCont>
          <Row align="center">       
            <Col xs={12} md={6}>
              <DescriptionCont>
                <Title>
                  MEDIDAS DE SEGURIDAD
                </Title>
                <SubTitle>Hoy más que nunca necesitamos cuidarnos, es por eso que en cada visita tenemos los siguientes protocolos para mostrar cada propiedad:</SubTitle>
                <Description>
                  <ListItem>
                    Mascarilla
                  </ListItem>
                  <ListItem>
                  Alcohol Gel
                  </ListItem>
                  <ListItem>
                  Desinfectante en spray para la suela de los zapatos
                  </ListItem>
                  <ListItem>
                  No más de 2 personas en la visita
                  </ListItem>
                  <ListItem>
                  Distanciamiento Social de 1 metro
                  </ListItem>
                  <ListItem>
                  Saludar de lejos
                  </ListItem>                                                                                          
                </Description>
                <Footer>
                  ¡Nos cuidamos por nosotros y por ustedes!
                </Footer>
              </DescriptionCont>
            </Col>
            <Col xs={12} md={6}>
              <HeroImageContainer>
                <HeroImage src="/covid-2.jpg" />
              </HeroImageContainer>
            </Col>                 
          </Row>
      </HeroInfoCont>
    </MainCont>
    </Container>
  )
}