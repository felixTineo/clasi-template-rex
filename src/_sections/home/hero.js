import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { SearchForm, FormCode } from '../../_components/forms'
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { DownCircleFilled } from '@ant-design/icons';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MainCont = styled.section`
  position: relative;
  min-height: calc(100vh - 82px);
  position: relative;
  color: #fff;
  @media(min-width: 768px){
    align-items: center;    
    height: calc(100vh - 166.7px - 121.78px);
  }
`
const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  @media(min-width: 768px){
    height: calc(100vh - 166.7px - 121.78px);
  }
`
const SlideImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${props => props.src}");
  background-size: cover;
  background-position: bottom;
  @media(min-width: 768px){
    height: calc(100vh - 166.7px - 121.78px);
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
    height: calc(100vh - 166.7px - 121.78px);
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
    height: calc(100vh - 166.7px - 121.78px);
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
  //color: ${props => props.active ?  props.theme.main.primaryColor : '#ADADAD'};
  color:#fff;
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: ${props => props.active ?  "bold" : 'normal'};
`
const CustonDot = styled(Dot)`
  position: absolute;
  bottom: 0;
  width: 12px !important;
  padding: 0;
  height: 12px;
  border-radius: 50%;
  margin-bottom: .5rem;
  margin-right: 1rem;
  border: 1px solid #fff;
  background: transparent;
  &:disabled{
    background: #fff;
  }
`

const BackgroundSlider = ()=> (
  <CarouselProvider
    naturalSlideWidth={100}
    //naturalSlideHeight={125}
    isIntrinsicHeight
    totalSlides={4}
    isPlaying
    interval={3000}
  >
    <Slider>
      <Slide index={0}><SlideImage src="/hero-slide-1.jpg" alt="trabajo" /></Slide>
      <Slide index={1}><SlideImage src="/hero-slide-2.jpg" alt="cocina" /></Slide>
      <Slide index={2}><SlideImage src="/hero-slide-3.jpg" alt="tasa de té" /></Slide>
      <Slide index={3}><SlideImage src="/hero-slide-4.jpg" alt="tasa de té" /></Slide>
    </Slider>
      <CustonDot slide={0} style={{ right: "69px" }} />
      <CustonDot slide={1} style={{ right: "46px" }} />
      <CustonDot slide={2} style={{ right: "23px" }} />    
      <CustonDot slide={3} style={{ right: "0px" }} /> 
  </CarouselProvider>
)

export default ()=> {
  const state = useContext(Context);
  const [searchByCode, setSearchByCode] = useState(false);
  return(
    <MainCont>
      <SliderContainer>
        <BackgroundSlider />
      </SliderContainer>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <TitleContainer>
              <Title>
                Tenemos o buscamos para ti, la propiedad que sueñas en el sur y patagonia de nuestro país
              </Title>
              <Row style={{ width: "100%" }}>
                <Col xs={12} md={3}>
                  <FormSelectButton active={!searchByCode} onClick={()=> setSearchByCode(false)}>
                    Buscar propiedades
                    {
                      !searchByCode && <DownCircleFilled style={{ marginLeft: 8 }} />
                    }
                  </FormSelectButton>
                </Col>
                <Col xs={12} md={3}>
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
            <Col xs={12} md={3}>
              {/*<HeroImage src="/hero.jpg" />*/}
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