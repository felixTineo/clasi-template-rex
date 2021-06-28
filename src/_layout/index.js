import React from 'react';
import Context from '../_context';
//import data from '../_context/state';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import { Helmet } from "react-helmet";
import { WhatsAppOutlined, PhoneOutlined, LoadingOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const Layout = styled.div`
  overflow: hidden;
`

const Body = styled.div`
  position: relative;
  //padding-top: 67px;
  min-height: 100vh;
  @media(min-width: 768px){
    //padding-top: 89px;
  }
`

const ContactButton = styled.a`
display: none;
@media(min-width: 768px){
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${props => props.top};
  right:.5rem;
  background-color: #fff;
  //background-color: #06d755;
  color: #212121;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: 250ms ease;
  font-size: 1.5rem;
  border: 1px solid rgba(0, 0, 0, .12);
  z-index: 1000;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover{
    color: ${props => props.phone ? props.theme.main.primaryColor : "#06d755"};
  }
}
`

export default ({ children, data })=> {

  return(
    <Context.Provider value={data}>
      {console.log("LAYOUT DATA", data)}
      <ThemeProvider theme={data}>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Encuentra aquí la propiedad que estás buscando" />
            <title>Rojas Iñiguez | Propiedades</title>
            <link rel="canonical" href="http://propiedadescyp.cl" />
            <meta name="og:url" content="http://propiedadescyp.cl" />
            <meta name="og:title" content="Rojas Iñiguez | Propiedades" />
            <meta name="og:description" content="Encuentra aquí la propiedad que estás buscando" />
            {/* <meta name="og:image" content="http://propiedadescyp.cl/logo.png" /> */}
            <meta name="og:type" content="website" />            
          </Helmet>           
          <Header />
          <Body>
            {children}
          <ContactButton top="30%" title="Llamar" phone href={`tel:${data.office.phone.replace(/\s/g,'')}`}>
            <PhoneOutlined />
          </ContactButton>             
          <ContactButton top="calc(30% + 45px + .5rem)" title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${data.office.mobile.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20uestedes.`}>
            <WhatsAppOutlined />
          </ContactButton>          
          <ContactButton top="calc(30% + 90px + 1rem)" title="Llamar" phone href={`tel:${data.office.phone.replace(/\s/g,'')}`}>
            <FacebookOutlined />
          </ContactButton>                       
          <ContactButton top="calc(30% + 135px + 1.5rem)" title="Llamar" phone href={`tel:${data.office.phone.replace(/\s/g,'')}`}>
            <InstagramOutlined />
          </ContactButton>                                 
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}