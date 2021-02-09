import React, { useContext } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Link from '../link';
import { truncate, priceFormat } from '../../_util';

const Card = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 450px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  transition: 250ms ease;
  &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
                0px 2px 2px rgba(0, 0, 0, .12),
                0px 4px 4px rgba(0, 0, 0, .12),
                0px 8px 8px rgba(0, 0, 0, .12),
                0px 16px 16px rgba(0, 0, 0, .12),
                0px 32px 32px rgba(0, 0, 0, .12);
  }  
`
const Header = styled.header`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 14px;
`
const Body = styled.div`
  flex: 1;
`
const Footer = styled.footer`
  
`
const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 22px;
`
const InfoContainer = styled.ul`
  font-size: 14px;
  list-style:none;
  padding: 0;
  margin: 0;
  font-weight: lighter;
`
const CharItem = styled.li`
  margin: .5rem 0;
  display: flex;
  align-items: center;
  span{
    //margin-left: .5rem;
  }
  img{
    width: 20px;
  }
`


export default ({
  mainImage,
  operation,
  title,
  value,
  code,
  currency,
  ubication,
  characteristics,  
  _id
})=> {
  const builderId = useContext(context).builderId;
  return(
    <Link to={`/property?builderId=${builderId}&propertyId=${_id}`} title="Ver propiedad">
      <Card src={mainImage}>
        <Header>{operation}</Header>
        <Body />
        <Footer>
          <Title>
            {truncate(title, 50)}
          </Title>
          <Title>
            {currency} {currency !== "UF" && "$"}{priceFormat(value)}
          </Title>
          <InfoContainer>
            <CharItem>
              {truncate(ubication.commune, 50)}
            </CharItem>
          {
            characteristics.filter(char => (
              char.name === "Superficie total" ||
              char.name === "Superficie útil" ||
              char.name === "Habitaciones" ||
              char.name === "Baños" ||
              char.name === "Estacionamientos"

            ) ).map((char, index) => (
              <CharItem key={index}>
                {/*
                  char.name === "Superficie total" && <img src="/icons/surface.svg" /> ||
                  char.name === "Superficie útil" && <img src="/icons/surface.svg" />  ||
                  char.name === "Habitaciones" && <img src="/icons/rooms.svg" /> ||
                  char.name === "Baños" && <img src="/icons/bath.svg" />
                */}
                <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
              </CharItem>
            ))
          }
          </InfoContainer>
        </Footer>
      </Card>
    </Link>
  )
}


/*import React from 'react';
import Link from '../link';
import styled from 'styled-components';

const CardCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #EBEBEB;
  height: 480px;
  transition: 250ms ease;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.108337);
  margin:0 .3rem; 
  &:hover{
    //box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.108337);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
                0px 2px 2px rgba(0, 0, 0, .12),
                0px 4px 4px rgba(0, 0, 0, .12),
                0px 8px 8px rgba(0, 0, 0, .12),
                0px 16px 16px rgba(0, 0, 0, .12),
                0px 32px 32px rgba(0, 0, 0, .12);
  }
  @media(min-width: 768px){
    margin:0;
  }
`
const CardImage = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, .8), transparent 35%), url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  padding-top: 75%;
`
const CardInfo = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #212121;
`
const CardTitleCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
`
const CardTitle = styled.li`
  font-size: 1.2rem;
  margin-bottom: .5rem;
`
const CardPrice = styled.li`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: .5rem;
`
const CardOperation = styled.span`
  font-weight: bold;
`
const CardCharacteristics = styled.ul`
  list-style: none;
  padding: 1rem;
  color: #919191;
`

const CharItem = styled.li`
  margin-bottom: .5rem;
`
const Divider = styled.span`
  height: 1px;
  width: 100%;
  background-color: #EBEBEB;
`
const OperationCont = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
`

export default ({
  mainImage,
  title,
  value,
  code,
  ubication,
  characteristics,
})=> {
  return(
    <Link to="/property" title="Ver propiedad">
    <CardCont>
      <CardImage src={mainImage}>
        <OperationCont>
          <CardOperation>Venta - </CardOperation>
          <span>cod {code}</span>
        </OperationCont>
      </CardImage>
      <CardInfo>
        <CardTitleCont>
          <CardTitle>{title}</CardTitle>
          <CardPrice>UF ${value}</CardPrice>
        </CardTitleCont>
        <Divider />
        <CardCharacteristics>
          <CharItem>{ubication.address}</CharItem>
          {
            characteristics.slice(0, 2).map((char, index) => (
              <CharItem key={index}>
                <span>{char.name} {char.value} {char.name === "Sup. Total" && "mt2"}</span>
              </CharItem>
            ))
          }
        </CardCharacteristics>
      </CardInfo>
    </CardCont>
    </Link>
  )
}*/