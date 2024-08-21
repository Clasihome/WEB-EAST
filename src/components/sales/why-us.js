import React from 'react';
import styled from 'styled-components';
import { Section } from '../../styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import Contact from './contact-us';

const SectionCustom = styled(Section)`
  
`

const Title = styled.h2`
  color: ${porps => porps.theme.primaryColor};
`

const Subtitle = styled.p`
  margin-bottom: 10rem;
`

const Paragrahp = styled.p`
  
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
          Vende con EZ PROPIEDADES
        </Title>
        <Subtitle>
          Nosotros colocamos tu propiedad frente a mas compradores potenciales que nadie.
        </Subtitle>
        <Row>
          <Col xs={12} md={6}>
            <WhyTitle>
              <span>Porque</span> EZ PROPIEDADES
            </WhyTitle>
            <Paragrahp>
              Cuando trabajas con uno de nuestros agentes, estás trabajando con alguien que combina la experiencia del mercado con la innovación empresarial. Escucharemos sus necesidades y objetivos, usaremos datos y creatividad para optimizar su propiedad para compradores potenciales y estaremos a su lado en cada paso del proceso de venta.
            </Paragrahp>
            <Paragrahp>
              Con EZ PROPIEDADES, ponemos su propiedad frente a más compradores potenciales que nadie. Damos la bienvenida a las expectativas porque nos mantenemos en el más alto nivel. Sabemos que la confianza se gana a través de la entrega de resultados y que nuestro éxito lo define el suyo.
            </Paragrahp>
            <Paragrahp>
              Si está considerando vender su casa, o simplemente quiere tener una idea de lo que obtendría su casa en el mercado, nos encantaría conocerlo.
            </Paragrahp>
          </Col>
          <Col xs={12} md={6}>
            <Contact />
          </Col>          
        </Row>
        <SellerGuideCont>
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
        </DescriptionList>
      </Container>
    </SectionCustom>
  )
}