import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { Button } from '../buttons';

const BannerCont = styled.div`
  //margin-top: 2rem;
  padding: 0rem 2rem;
  background-color: #fff;
  background-image: ${props => props.image ? `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${props.image})` : ""};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;
`
const Title = styled.p`
  color: ${props => props.theme.main.primaryColor};
  display: flex;
  align-items: center;
  //justify-content: center;
  text-align: center;
  font-size: 22px;
  margin: 0;
  @media(min-width: 768px){
    text-align: left;
  }
`
const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ({ title, image, onClick, buttonText, icon }) => {

  return(
    <BannerCont image={image}>
      <Row align="center">
        <Visible xs>
          <Col xs={12}>
            <ImageCont>
              {
                icon && <img src={icon} alt={title} style={{ marginRight: ".5rem" }} />
              }
            </ImageCont>
          </Col>
        </Visible>
        <Col xs={12} md={9}>
          <Title>
            <Hidden xs>
              {
                icon && <img src={icon} alt={title} style={{ marginRight: ".5rem" }} />
              }
            </Hidden>
            {title}
          </Title>
        </Col>
        <Col xs={12} md={3}>
          <Button onClick={onClick} block primary rounded>
            Ver más
          </Button>
        </Col>        
      </Row>
    </BannerCont>
  )
}