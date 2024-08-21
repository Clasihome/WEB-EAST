import React from 'react';
import styled from 'styled-components';
import { Section } from '../../styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import Link from '../link';

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(37,17,4,.5); 
  margin-bottom: 4rem;
  @media(min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`
const InfoItem = styled.li`
  
  @media(min-width: 768px){
    width: 30%;
  }
`

const Title = styled.h2`
  color: hsl(23, 81%, 8%);
  transition: 250ms ease;
  &:hover{
    color: hsl(23, 81%, 12%);
  }
  &:active{
    color: hsl(23, 81%, 8%);
  }
`
const Paragrahp = styled.p`
  color: rgba(37,17,4,.5);
`
const PublishAt = styled.p`
  font-size: .7rem;
  margin: 0;
`
const PortalsList = styled.ul`
  font-size: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
  li{
    margin-bottom: 1rem;
  }
`
const IndicatorsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media(min-width: 768px){
    display: flex;
    li + li{
    margin-left: 2rem;
  }
  }
`
const IndicatorItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    width: 30%;
    flex-direction: row;
    margin-bottom: 0;
  }
`
const IndicatorNumber = styled.span`
  font-size: 3rem;
`
const IndicatorInfo = styled.span`
  padding: 0 1rem;
  color: rgba(37,17,4,.5);
`

export default () => {

  return(
    <Section>
      <Container>
        <InfoList>
          <InfoItem>
            <Link to="/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=VENTA&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP">
              <Title>
                VENTA ⇢
              </Title>
            </Link>
            <Link to="/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=ARRIENDO&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP">
              <Title>
                ARRIENDO ⇢
              </Title>            
            </Link>
          </InfoItem>
          <InfoItem>
            <Paragrahp>
              Laborum pariatur non duis velit Lorem veniam magna aliquip cillum non deserunt ullamco. Tempor laborum pariatur minim esse consequat eu.
            </Paragrahp>
            <Paragrahp>
              Laborum pariatur non duis velit Lorem veniam
            </Paragrahp>            
          </InfoItem>
          <InfoItem>
            <PublishAt>
              DESTACADOS EN:
            </PublishAt>
            <PortalsList>
              <li>
                Instagram
              </li>
              <li>
                Facebook
              </li>
              <li>
                Portal inmobiliario
              </li>
              <li>
                Doomos
              </li>
            </PortalsList>             
          </InfoItem>                    
        </InfoList>
        {/* <IndicatorsList>
          <IndicatorItem>
            <IndicatorNumber>
              $15.4M
            </IndicatorNumber>
            <IndicatorInfo>
              TRANSACCIONES DE PROPIEDADES
            </IndicatorInfo>
          </IndicatorItem>
          <IndicatorItem>
            <IndicatorNumber>
              25K+
            </IndicatorNumber>
            <IndicatorInfo>
              PROPIEDADES PARA COMPRAR Y VENDER
            </IndicatorInfo>
          </IndicatorItem>
          <IndicatorItem>
            <IndicatorNumber>
              500
            </IndicatorNumber>
            <IndicatorInfo>
              TRANSACCIONES COMPLETADAS AL MES
            </IndicatorInfo>
          </IndicatorItem>                    
        </IndicatorsList> */}
      </Container>
    </Section>
  )
}