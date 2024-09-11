import React from 'react';
import styled from 'styled-components';
import { Section } from '../../styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import Contact from './contact-us';

const SectionCustom = styled(Section)`
  
`

const Title = styled.h4`
  color: black;
`

const Subtitle = styled.p`
  margin-bottom: 10rem;
`

const Paragrahp = styled.p`
text-align: justify;
  
`

const WhyTitle = styled.h2`
  span{

  }
`
const SellerGuideCont = styled.div`
  margin-top: 4rem;
  //display: flex;
  //flex-direction: column;
  @media(min-width: 768px){
    width: 50%;  
  }
`
const SellerGuideImg = styled.img`
  width: 80%;
  margin: 4rem auto;
  display: block;
  @media(min-width: 768px){
    width: 332px;
  }
`
const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media(min-width: 768px){
    display: flex;
    width: 75%;
    li:first-child{
      padding-left: 0;
    }
    li + li{
      border-left: 2px solid ${props => props.theme.primaryColor};
    }
  }  
`
const DescriptionItem = styled.li`
  flex: 1 0 0;
  padding: 2rem 0;
  border-bottom: 2px solid ${props => props.theme.primaryColor};
  @media(min-width: 768px){
    padding: 1rem 2rem;
    border: none;
  }
`
const DescriptionTitle = styled.p`
  font-size: 1.3rem;
  span{
    font-weight: bold;
  }
`
const DescriptionParagraph = styled.p`
  color: gray;
`

export default () => {

  return(
    <SectionCustom>
      <Container>
        <Title>
         REAL STATE
        </Title>
        <br></br>
   
        <Row>
          <Col xs={12} md={6}>
            <WhyTitle>
        
            </WhyTitle>
            <Paragrahp>
            Nuestro compromiso es proporcionar a nuestros clientes un servicio personalizado y exclusivo, convirtiéndonos en su asesor inmobiliario de confianza.

            </Paragrahp>
            <Paragrahp>
            Nuestros servicios están diseñados para brindarle una experiencia inmobiliaria sin complicaciones, abarcando desde la valoración inicial de su propiedad hasta la gestión completa del proceso de compra, venta o alquiler.
            </Paragrahp>
           
          </Col>
          <Col xs={12} md={6}>
            <Contact />
          </Col>          
        </Row>
        {/*<SellerGuideCont>
          <Title>
            Descarga nuestra guia del vendedor
          </Title>
          <a href="/seller-guide.pdf">
            <SellerGuideImg src={require("../../images/seller-guide.png")} alt="seller guide" />
          </a>
        </SellerGuideCont>
        <DescriptionList>
          <DescriptionItem>
            <DescriptionTitle>
              <span>EZ PROPIEDADES</span>
            </DescriptionTitle>
            <DescriptionParagraph>
              Nuestra plataforma de innovación impulsada por la tecnología brinda a nuestros vendedores una exposición y amplificación incomparables, al tiempo que les permite identificar su mercado objetivo y llegar a compradores que nunca podrían tener utilizando técnicas de venta tradicionales.
            </DescriptionParagraph>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionTitle>
            <span>EZ PROPIEDADES</span><br />Estudios
            </DescriptionTitle>
            <DescriptionParagraph>
              Nuestro centro de producción y medios interno de servicio completo crea contenido atractivo y altamente personalizado para EZ PROPIEDADES.
            </DescriptionParagraph>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionTitle>            
              Su éxito es nuestro éxito
            </DescriptionTitle>
            <DescriptionParagraph>
              EZ PROPIEDADES pasó de ser el equipo de ventas número uno en el mercado más difícil del mundo a una firma de corretaje de servicio completo que está revolucionando el modelo inmobiliario tradicional.
            </DescriptionParagraph>
          </DescriptionItem>                    
        </DescriptionList>*/}
      </Container>
    </SectionCustom>
  )
}