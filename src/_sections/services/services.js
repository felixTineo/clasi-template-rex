import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

//import { Section } from '../../styled-components';

const SectionCustom = styled.section`
  padding-top: 12rem;
`

const Title = styled.h2`
  color: ${props => props.theme.secondaryColor};
`
const Description = styled.p`
  text-align: justify;
`
const List = styled.ol` 
  font-size: .8rem;
  color: gray;
`
const Item = styled.li`
  margin-bottom: 1rem;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const LegalCont = styled.div`
  min-height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("/legal.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  @media(min-width: 767px){
    #legal-inner{
    width: 50%;
  }
  }
`

export default ()=> {

  return(
    <SectionCustom height="100vh">
      <Container>
        <Row style={{ marginBottom: "12rem" }}>
          <Col xs={12} md={6}>
            <Image style={{ /*clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"*/ }} src="/about-1.jpg" />
          </Col>                    
          <Col xs={12} md={6}>
            <Title>VENTAS</Title>
            <Description>Te asesoramos en la compra o venta de tu bien raíz</Description>
            <List>
              <Item>
                Valorizamos tu propiedad de acuerdo datos duros del comportamiento de la zona.
              </Item>
              <Item>
                Mostramos la propiedad sin intermediarios.
              </Item>
              <Item>
                Fotografías profesionales tierra y aire (Drone).
              </Item>
              <Item>
                Asesoría Legal con nuestro abogado.
              </Item>                                          
              <Item>
                Publicamos en todos los portales y una red de corredores en todo chile. Ademas de nuestras redes sociales.
              </Item>
              <Item>
                La comisión se paga una vez inscrita la propiedad.
              </Item>
            </List>
          </Col>              
          </Row>
          <Row style={{ marginBottom: "12rem" }}>
          <Col xs={12} md={6}>
            <Title>ARRIENDOS</Title>
            <Description>Buscamos y calificamos al arrendatario ideal para tu inmueble</Description>
            <List>
              <Item>
                Asesoría en la definición del canon de arriendo
              </Item>
              <Item>
                Mostramos la propiedad sin intermediarios
              </Item>
              <Item>
                Fotografías profesionales tierra y aire (Drone).
              </Item>
              <Item>
                Publicamos en todos los portales y una red de corredores en todo chile. Ademas de nuestras redes sociales.
              </Item>                                          
              <Item>
                Estricto proceso de selección del arrendatario.
              </Item>
              <Item>
                Asesoría Legal.
              </Item>
              <Item>
                Redacción de contratos con nuestro abogado.
              </Item>
              <Item>
                Entregamos la propiedad.
              </Item>
            </List>
          </Col>          
          <Col xs={12} md={6}>
            <Image style={{ /*clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)"*/ }} src="/about-2.jpg" />
          </Col>                
        </Row>
        <Row style={{ marginBottom: "12rem" }}>
          <Col xs={12} md={6}>
            <Image style={{ /*clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"*/ }} src="/about-3.jpg" />
          </Col>             
          <Col xs={12} md={6}>
            <Title>ADMINISTRACION</Title>
            <Description>Deja en nuestras manos la administración completa de tu propiedad.</Description>
            <List>
              <Item>
                Recaudación de arriendo y transferencia en cuenta corriente del arrendador en el caso que así lo quiera.
              </Item>
              <Item>
                Envío de liquidación de arriendo electrónica.
              </Item>
              <Item>
                Gestión de reparaciones y mantenciones.
              </Item>
              <Item>
                Reajuste del canon de arriendo cuando lo amerita.
              </Item>                                          
              <Item>
                Término de Arriendo.
              </Item>
              <Item>
                Orientación Legal.
              </Item>                           
            </List>
          </Col>                       
        </Row>    
        <Row style={{ marginBottom: "12rem" }}>
          <Col xs={12} md={6}>
            <Title>TOPOGRAFIA</Title>
            <Description>Topógrafos asociados nos permiten gran agilidad en fusiones y separaciones de roles, loteos, etc.</Description>
          </Col>          
          <Col xs={12} md={6}>
            <Image style={{ /*clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)"*/ }} src="/60d9dead2dc69.jpg" />
          </Col>                
        </Row>   
        <Row style={{ marginBottom: "12rem" }}>
          <Col xs={12} md={6}>
            <Image style={{ /*clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)"*/ }} src="/60d9df4e4248c.jpg" />
          </Col>             
          <Col xs={12} md={6}>
            <Title>DRONE Y FOTOGRAFIA</Title>
            <Description>Contamos con fotógrafo profesional y piloto de drone certificado, para los mejores registros de la propiedad.</Description>
          </Col>                       
        </Row>                   
      </Container>
      <LegalCont>
        <div id="legal-inner">
          <Container>
            <Title>
              ASESORIA LEGAL
            </Title>
            <Description>
              Nuestra socia Margarita Iñiguez abogado Universidad de Los Andes con gran experiencia inmobiliaria. Revisa cada propiedad.
            </Description>
          </Container>
        </div>
      </LegalCont>
    </SectionCustom>
  )
}