import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section } from '../../styled-components';
import ServiceCarousel from '../carousels/services';
import ReviewsCarousel from '../carousels/reviews';
import { ClasiQuote } from '../../icons';

import sale from '../../images/sale.png';
import buy from '../../images/buy.png';
import leasing from '../../images/leasing.png';

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #fff;
  position: relative;
  z-index: 1;
  @media(min-width: 768px){
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-align: center;
  }
`
const SubTitle = styled.p`
  margin-bottom: 4rem;
  color: #fff;
  position: relative;
  z-index: 1;  
  @media(min-width: 768px){
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 4rem;
  }
`

const Services = styled.div`
  margin-bottom: 4rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`
const Reviews = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(min-width: 768px){
    width: 50%;
    margin: 0 auto;
  }  
`
const Quote = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 4rem;
  margin: 4rem 0;
  //margin-top: auto;
  display: flex;
  justify-content: center;
`
const ServiceCont = styled.div`
  margin-bottom: 4rem;
  background-color: black;
  padding: 4rem 0;
  color: #fff;
  position: relative;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`
const VideoOverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;  
  top: 0;
  left: 0;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
  //z-index: 100;
`
const ServiceItem = styled.div`
  text-align: center;
  padding: 0 1.5rem;
`
const ServiceIcon = styled.img`
  width: 80px;
`
const ServiceTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: .5rem auto;
`
const ServiceInfo = styled.p`
  font-size: .9rem;
`


export default ()=>{

  return(
    <Section>
      <ServiceCont>
        <Video
          src={require('../../videos/service.mp4')}
          autoPlay
          loop
          muted
          playsinline
          poster={require('../../videos/service.webp')}
        />         
        <VideoOverLay /> 
        <Container>
          <Title>Ofrecemos un servicio ajustado a las necesidades de cada cliente</Title>  
          <SubTitle>Estas son algunas de las cosas que podemos hacer por vos:</SubTitle>                   
          <Row>
            <Col xs={12} md={4}>
              <ServiceItem>
                <ServiceIcon src={buy} alt="compra de inmuebles" />
                <ServiceTitle>
                  Compra
                </ServiceTitle>
                <ServiceInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit
                </ServiceInfo>
              </ServiceItem>              
            </Col>
            <Col xs={12} md={4}>
              <ServiceItem>
                <ServiceIcon src={sale} alt="compra de inmuebles" />
                <ServiceTitle>
                  Venta
                </ServiceTitle>
                <ServiceInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit
                </ServiceInfo>
              </ServiceItem>              
            </Col>
            <Col xs={12} md={4}>
              <ServiceItem>
                <ServiceIcon src={leasing} alt="compra de inmuebles" />
                <ServiceTitle>
                  Arriendo
                </ServiceTitle>
                <ServiceInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit
                </ServiceInfo>
              </ServiceItem>              
            </Col>                                
          </Row>    
        </Container>     
      </ServiceCont>        
      <Container>
        <Row>
          <Col xs={12}>
            <Reviews>
              <Quote>
                <ClasiQuote />
              </Quote>              
              <ReviewsCarousel />
            </Reviews>
          </Col>       
        </Row>
      </Container>
    </Section>
  )
}