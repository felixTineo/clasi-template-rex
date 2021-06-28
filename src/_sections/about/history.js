import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';

const MainCont = styled.section`
  padding: 4rem 0;
  //min-height: 100vh;
  background-color: ${props => props.theme.main.primaryColor};
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
`
const Title = styled.h2`
  color: #fff;
`
const Description = styled.div`

`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 448px;
  height: 388px;
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <HistoryCont>
              <Title>
                Nuestra Historia
              </Title>
              <Description>
                <p>
                Luego de años disfrutando del Lago Ranco y su entorno maravilloso, decidimos
como familia junto a nuestros 3 hijos vivir este proyecto en el sur de Chile. Así
formamos nuestra corredora “Rojas Iñiguez Propiedades”, con una propuesta
innovadora, sacando partido a las mejores capacidades de cada uno, Margarita
aporta con todos sus conocimientos como abogado e Ignacio con su gran
manejo en tecnología y profesional enfoque para dar a nuestros clientes la
mejor experiencia en la compra o venta de su propiedad. 
                </p>

                <p>
                  El hecho de vivir en la
                  Región de los Ríos nos ha dado la posibilidad de conocer a gente maravillosa y
                  lugares increíbles, sin duda la mezcla perfecta para encontrar los mejores
                  parajes de esta zona destinados a satisfacer las distintas necesidades nuestros
                  clientes. Somos una empresa familiar, que busca no sólo dar la mejor asesoría
                  inmobiliaria sino también acompañar en este proceso a las personas que han
                  confiado en nosotros esa decisión tan importante de la vida.
                  Estamos siempre preocupados en ayudar de manera sustentable al crecimiento
                  de estos maravillosos lugares y su gente.
                </p>              
              </Description>
            </HistoryCont>
          </Col>                    
          <Hidden xs>
            <Col md={6}>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
                <Image src="/DSC_3199.jpg" alt="historia" />
              </div>
            </Col>
          </Hidden>                    
        </Row>
      </Container>
    </MainCont>
  )
}