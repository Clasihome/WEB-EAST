import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../../images/home-hero.png';

import { Section } from '../../styled-components';

const MainCont = styled(Section)`
  
  //background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`
const HeroImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0;
  z-index: 0;
  max-width: 30%;
  @media(min-width: 768px){
    
  }
`

const Title = styled.h2`
  //width: 50%;
  
`

export default ()=> {
  const state = useContext(context);
  return(
    <MainCont 
      first
      height="18vh"
  
    >
     
      <Container>
       
      </Container>
    </MainCont>
  )
}