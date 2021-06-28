import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ITEMS = [
  {
    review: "Un agrado trabajar con ellos, conocen muy bien la zona y nos guiaron todo el rato",
    author: "FERNANDO Y BARBARA",
  },
  {
    review: "Notable manejo del área legal, experiencia y conocen la región&quot",
    author: "CRISTOBAL",
  },
  {
    review: "Siempre estuvieron acompañándonos, asesorándonos y mostrándonos todas las alternativas",
    author: "MATIAS Y MARIA IGNACIA",
  },
  {
    review: "Entendieron perfecto lo que buscábamos y lo encontraron",
    author: "Pedro y Gabriela",
  },      
]

const RevieweCont = styled.div`
  position: relative;
  padding: 2rem;
  background-color: transparent;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 500px;
  @media(min-width: 768px){
    //flex-direction: row;
    min-height: 50vh;
    padding-top: 0;
    align-items: center;
    justify-content: space-around;
  }
`
const ReviewInnerCont = styled.div`
  @media(min-width: 768px){
    width: 50%;
  }
`
const ReviewAuthor = styled.p`
  font-weight: bold;
  text-align: center;
`
const ReviewDescription = styled.p`
  text-align: center;
`
const SvgCont = styled.svg`
  
  fill: ${props => props.theme.main.primaryColor};
`
const SvgContButton = styled.svg`
  fill: #fff;
`
const DotsCont = styled.div`
  position: absolute;
  border: 1px solid red;
  width: 90%;
  display: flex;
  justify-content: center;
`
const QuotationCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Review = ({ id, review, author }) => {
  return(
    <RevieweCont>
        <QuotationCont>
          <SvgCont width="99" height="69" version="1.1" viewBox="0 0 99 69" xmlns="http://www.w3.org/2000/svg">
            <path d="m39.434 47.834c0 12.276-8.3019 21.166-19.51 21.166-10.792 0-19.924-8.0429-19.924-21.166 0-6.7731 2.4906-12.276 6.2264-17.779l19.509-30.055h18.264l-13.698 30.478c6.2264 3.3865 9.1321 10.16 9.1321 17.356zm55 0c0 12.276-8.3019 21.166-19.51 21.166-10.792 0-19.924-8.0429-19.924-21.166 0-6.7731 2.4906-12.276 6.2264-17.779l19.509-30.055h18.264l-13.698 30.478c6.2264 3.3865 9.1321 10.16 9.1321 17.356z" clipRule="evenodd" fillRule="evenodd"/>
          </SvgCont>
        </QuotationCont>
      <ReviewInnerCont>
        <ReviewDescription>
          {review}
        </ReviewDescription>
        <ReviewAuthor>
          {author}
        </ReviewAuthor>
      </ReviewInnerCont>
    </RevieweCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = ITEMS;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-quote-back-button" style={{ backgroundColor: color }}>
            <SvgContButton width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"/>
            </SvgContButton>
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-quote-next-button" style={{ backgroundColor: color }}>
            <SvgContButton width="8" height="14" fill="none" version="1.1" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"/>
            </SvgContButton>
          </ButtonNext>          
          <div style={{ display: "flex", justifyContent: "center" }}>
            {
              Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
            }    
          </div>      
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          orientation="horizontal"
          isPlaying={true}
        >
          <Slider>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Review {...item} />
                </Slide>
              ))
            }
          </Slider>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {
              Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
            }
          </div>
        </CarouselProvider>
      </Visible>
    </Fragment>
  )
}