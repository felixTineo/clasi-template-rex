import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { ServiceCarousel, ReviewCarousel } from '../../_components/carousels';
import { navigate } from 'gatsby';

const MainCont = styled.section`  
  position: relative;
  padding-bottom: 6rem;
`
const HeroInfoCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  min-height: calc(50vh - 4rem);
  color: #ffffff;
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  height: 100%;
  padding: 4rem 3rem;
`
const Title = styled.h2`
  font-size: 30px;
`
const Description = styled.p`
  margin: 2rem 0 4rem;
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
const TitleService = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
  padding-top: 4rem;
  text-align: center;
  @media(min-width: 578px){
    //width: 50%;
  }
`
const SubTitleService = styled(Description)`
  font-weight: bold;
  margin: 4rem 0 0;
`
const TitleQuoteCont = styled.div`
  padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  padding-top: 0rem;
  @media(min-width: 768px){
    padding-top: 2rem;
  }
`
const CarouselCont = styled.div`
  position: relative;
`


export default ()=> {
  const state = useContext(Context).home;
  const builderId = useContext(Context).builderId;
  return(
    <Container>
    <MainCont>
      <HeroInfoCont>
          <Row>
            <Col xs={12} md={6}>
              <HeroImageContainer>
                <HeroImage src="/home-about.jpg" />
              </HeroImageContainer>
            </Col>            
            <Col xs={12} md={6}>
              <DescriptionCont>
                <Title>
                  Buscamos no sólo dar la mejor asesoría inmobiliaria sino también acompañarte en el proceso.
                </Title>
                <Description>
                El hecho de vivir en la
Región de los Ríos nos ha dado la posibilidad de conocer a gente maravillosa y
lugares increíbles, sin duda la mezcla perfecta para encontrar los mejores
parajes de esta zona destinados a satisfacer las distintas necesidades nuestros
clientes. Somos
                </Description>
                <Button block rounded onClick={()=> navigate(`/about?builderId=${builderId}`)}>
                  Conózcanos
                </Button>
              </DescriptionCont>
            </Col>
          </Row>
      </HeroInfoCont>
        <Row gutterWidth={32}>
          <Col xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TitleService>Cuenta con nosotros,<br /> te asesoraremos en todo.</TitleService>
            </div>
          </Col>
          <Col xs={12}>
            <CarouselCont>
              <ServiceCarousel />
            </CarouselCont>
          </Col>
          <Col xs={12} md={12}>
            <QuoteCarouselCont>
              <ReviewCarousel />
            </QuoteCarouselCont>
          </Col>          
        </Row>
    </MainCont>
    </Container>
  )
}