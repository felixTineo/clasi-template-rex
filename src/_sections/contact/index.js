import React, { useContext } from 'react';
import context from '../../_context/';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';
import Map from '../../_components/map';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 125.84px;
  @media(min-width: 768px){
    margin-top: 4rem;
  } 
`
const TitleFormCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  height: 100%;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`

const Title = styled.h1`
  background-color: ${props => props.theme.main.primaryColor};
  border-top-left-radius: 8px;
  color: #fff;
  margin: 0;
  font-size: 30px;
  padding: 2rem;
  margin: 0;
  @media(min-width: 768px){
    padding: 4rem;
  }  
`
const SubTitle = styled.p`

`
const Form = styled.form`
  padding: 2rem;
  width: 100%;
  margin: 0;
  background-color: ${props => props.theme.main.primaryColor};
  /*box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);*/
  @media(min-width: 768px){
    padding: 4rem;
    padding-top: 0;
    margin: 0;
  }
`
const ImgCaptcha = styled.img`
  width: 100%;
`
const MailSpan = styled.span`
  color: ${props => props.theme.main.primaryColor};
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  margin-top: 4rem;
  text-align: center;
`
const ButtonContainer = styled.div`
   //margin-top: 32px;
   display:flex;
   //justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`
const ImageCont = styled.div`
  height: 100%;
`
const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`

export default ()=> {
  const { lat, lng } = useContext(context).office;
  return(
    <Container>
      <MainCont>
        <Row gutterWidth={0}>
          <Col xs={12} md={6}>
            <TitleFormCont>
            <Title>
              Envíanos un mensaje y con gusto te atenderemos.
            </Title>
            <Form onSubmit={e=> e.preventDefault()}>
              <Row align="center">
                <Col xs={12}>
                  <Input
                    placeholder="Nombre"
                    id="name"
                    gray
                    vertical  
                  />
                </Col>
                <Col xs={12}>
                  <Input
                    placeholder="Email"
                    id="email"
                    gray
                    vertical  
                  />                                            
                </Col>
                <Col xs={12}>
                  <Input
                    placeholder="Teléfono"
                    id="phone"
                    gray
                    vertical  
                  />                                    
                </Col>
                <Col xs={12}>
                  <Textarea
                    placeholder="Mensaje"
                    id="message"
                    gray
                    rows={7}
                    vertical  
                  />                  
                </Col>
                <Col xs={12} md={12}>
                  <ButtonContainer>
                    <Button block rounded>Enviar</Button>
                  </ButtonContainer>                  
                </Col>                                                                          
              </Row>
            </Form >        
            </TitleFormCont>                           
          </Col>
          <Hidden xs>
          <Col xs={12} md={6}>
            <ImageCont>
              <ContactImage src="/contact.jpg" alt="contacto" />              
            </ImageCont>
          </Col>
          </Hidden>
          <Col xs={12}>
            <SubTitleFooter>
              También puede escribirnos a <MailSpan>contacto@cruzpuelmapropiedades.cl</MailSpan>
            </SubTitleFooter> 
          </Col>
{/*          <Col xs={12} md={6}>
          {
            lat && (
              <Map
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              height={"calc(100% - (5rem + 19px))"}
              zoom={16}
            />         
            )
          } 
            <SubTitle>

            </SubTitle>
            <SubTitleFooter>
              También puede escribirnos a <MailSpan>contacto@cruzpuelmapropiedades.cl</MailSpan>
            </SubTitleFooter> 
        </Col>*/}
        </Row>
      </MainCont>
    </Container>
  )
}