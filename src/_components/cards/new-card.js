import React from 'react';
import styled from 'styled-components';
import Link from '../link';

const Card = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 406px;
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


export default ({ image, title, tag, date })=>{
  return(
    <Link to="/new">
      <Card src={image}>
        <Header>{tag}</Header>
        <Body />
        <Footer>
          <Title>
            {title}
          </Title>
          <InfoContainer>
            <li>
              {date}
            </li>
          </InfoContainer>
        </Footer>
      </Card>
    </Link>
  )
}

/*import React from 'react';
import styled from 'styled-components';
import Link from '../../_components/link';

const CardCont = styled.div`
  background-color: #fff;
  border: 1px solid #EBEBEB;
`

const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`
const CardTag = styled.span`
  width: 86px;
  height: 27px;
  border-radius: 20px;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardDescription = styled.div`
  padding: 1rem;
`
const CardTitle = styled.p`
  
`
const CardDate = styled.span`
  color: #919191;
  font-size: 14px;
`

export default ({ image, title, tag, date })=>{

  return(
    <Link to="/new">
      <CardCont>
        <CardImage src={image} alt={title} />
        <CardDescription>
          <CardTag>
            {tag}
          </CardTag>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDate>
            {date}
          </CardDate>
        </CardDescription>
      </CardCont>
    </Link>
  )
}*/