import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { v1 as uuid } from 'uuid';

const DescriptioneCont = styled.div`
  padding: 2rem;
  padding-top: 0;
  color: ${props => props.theme.main.primaryColor};
  user-select: none;
  cursor: move;
`
const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
`
const DescriptionDescription = styled.div`
  font-size: .8rem;
  color: #777;
  text-align: justify;
  p{
    margin: 0;
  }
  ul{
    list-style: initial;
  }
  li{
    margin-bottom: .5rem;
  }
`

const cruzDescription = [
  {
    id: uuid(),
    title: "VENTA",
    description: `
      <ul>
        <li>Evaluación Comercial de tu Propiedad sin costo.</li>
        <li>Publicidad en medios especializados sin costo.</li>
        <li>Asesoría Legal sin costo.</li>
        <li>Asesoría profesional durante toda la operación (Legal, Comercial, Financiera).</li>
        <li>Negociación, Cierre de Negocio y Promesa de Compraventa</li>
      </ul>
    `
  },
  {
    id: uuid(),
    title: "POST VENTA",
    description: `
      <ul>
        <li>Asesoría en la Preparación de Carpeta de Títulos.</li>
        <li>Seguimiento y comunicación de estado de la operación.</li>
        <li>Entrega de la Propiedad.</li>
      </ul>
    `
  },
  {
    id: uuid(),
    title: "ARRIENDO",
    description: `
      <ul>
        <li>Evaluación Comercial de tu Propiedad sin costo.</li>
        <li>Publicidad en medios especializados sin costo.</li>
        <li>Asesoría Legal sin costo.</li>
        <li>Asesoría profesional durante toda la operación (Legal, Comercial, Financiera).</li>
        <li>Negociación, Cierre de Negocio y Promesa de Compraventa</li>
      </ul>
    `
  },   
  {
    id: uuid(),
    title: "ADMINISTRACIÓN",
    description: `<p>Nuestro servicio comprende la cobranza del arriendo, el pago de las contribuciones y cuentas, gestión de mantenciones y reparaciones, asesoría legal, comunicación con el arrendatario y todo lo que sea necesario para que no tengas que preocuparte de nada.</p>`
  }, 
  {
    id: uuid(),
    title: "TASACIÓN",
    description: `<p>Nosotros buscamos prestar un servicio integral y por medio del área de la tasación de una propiedad, podemos asesorarte de forma cabal, ejecutando un informe técnico acotado que nos ayudará a buscar el mejor valor del mercado inmobiliario de tu propiedad.</p>`
  }, 
  {
    id: uuid(),
    title: "BÚSQUEDA DE PROPIEDADES",
    description: `<p>Si buscas comprar una propiedad, nosotros buscamos por ti. Nosotros nos encargamos de buscar en el mercado inmobiliario las mejores opciones en base a tus necesidades y te damos las opciones acotadas. Coordinamos las visitas a las propiedades que hayas seleccionado. Te acompañamos y asesoramos (legal y comercialmente) en todo el proceso de compra, hasta la entrega de la propiedad. Si no encontramos nada que te guste, No pagas nada. Confía en nuestro profesionalismo y compromiso.</p> <br />`
  },   
]

const Description = ({ id, description, title }) => {
  return(
    <DescriptioneCont>
      <DescriptionTitle>
        {title}
      </DescriptionTitle>      
      <DescriptionDescription dangerouslySetInnerHTML={{ __html: description }} />
    </DescriptioneCont>
  )
}


export default ()=> {
  const state = useContext(Context);
  const items = state.about.description.items;
  const color = state.main.primaryColor;
  return(
    <Fragment>
      <Hidden xs>
        <CarouselProvider
          naturalSlideWidth={100}
          //naturalSlideHeight={60}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              cruzDescription.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Description {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-desc-back-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-left.svg" alt="chevron" />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-desc-next-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-right.svg" alt="chevron"/>
          </ButtonNext>
          {/*
            Array(items.length).fill(0).map((_,i) => <Dot style={{ backgroundColor: color }} className="carousel-text-dot" key={i} slide={i} />)
          */}
        </CarouselProvider>
      </Hidden>
      <Visible xs>
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={1}
          orientation="horizontal"
        >
          <Slider>
            {
              cruzDescription.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <Description {...item} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack className="carousel-back-button carousel-desc-back-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-left.svg" alt="chevron" />
          </ButtonBack>
          <ButtonNext className="carousel-next-button carousel-desc-next-button" style={{ backgroundColor: color }}>
            <img src="/icons/chevron-right.svg" alt="chevron"/>
          </ButtonNext>          
        </CarouselProvider>
        </Visible>
    </Fragment>
  )
}