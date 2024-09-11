import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Container } from 'react-bootstrap';
import { Section, Button } from '../../styled-components';
import FormProperty from '../forms/properties'
import FormCode from '../forms/code';
import { Agro } from '../../icons';
import RateBar from '../../layout/ratebar';
import heroImg from '../../images/ez-hero-desktop.png';
import Link from '../link';

const MainCont = styled(Section)`
  background-image: url("${require("../../images/casa.jpg")}");
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
  //color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const HeroImg = styled.img`
  position: absolute;
  bottom: 40px;
  right: 0;
  z-index: 0;
  max-width: 35%;
  @media(min-width: 468px){
    
  }
`
const InfoCont = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);  
  border-radius: 6px;
  padding-bottom: .3rem; /* Ajuste para más espacio en la parte inferior */
  z-index: 1;
  
  @media(min-width: 768px){
    max-width: 70%;
  }
`;
const Title = styled.h1`
color:black;
margin-left:1rem;

  
`
const RateBarCont = styled.div`
  margin-bottom: 0;
  text-align: left;
  position: absolute;
  top: calc(50% + (265px / 2));
  left: 0;
  //bottom: 0;
  display: none;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  @media(min-width: 768px){
    display: inline-block;
  }
`

const SearchOptionCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  @media(min-width: 768px){

  }
`
const SearchOption = styled.button`
  background: transparent;
  width: 100%;
  padding: 1rem 0;
  color: ${props => props.active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .6)" };
  position: relative;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  transition: 250ms ease;
  @media(min-width: 768px){
    width: 25%;
  }
`
const ButtonLine = styled.div`
  position: absolute;
  bottom: .5rem;
  //left: 0;
  transition: 250ms ease;
  width: ${props => props.active ? "50%" : "0"};
  height: 3px;
  background-color: ${props => props.active ? props.theme.primaryColor : "transparent"};
`
const DownLink = styled.a`
  text-decoration: none;
  color: #fff !important;
  background-color: ${props => props.theme.primaryColor};
  transition: 250ms ease;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    filter: brightness(1.1);
  }
`

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
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .2));
  //z-index: 100;
`
const Divider = styled.div`
  height: 91px;
  width: 100%;
  overflow:hidden;
  position: absolute;
  bottom: 0px;
  &::before{ 
    content:'';
  font-family:'shape divider from ShapeDividers.com';
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background-repeat: no-repeat;
  bottom: -0.1vw;
  left: -0.1vw;
  right: -0.1vw;
  top: -0.1vw; 
  background-size: 200% 91px;
  background-position: 50% 100%;  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 1" preserveAspectRatio="none"><path d="M0 0v1h10z" fill="%23ffffff"/></svg>'); 
  }
@media (min-width:2100px){
  background-size: 109% calc(2vw + 91px);
}
   
`
const Parrafo = styled.p`
margin-left:1rem;

color: black;

`

export default ()=> {
  const state = useContext(context);
  const [byCode, setByCode] = useState(false);
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from("#title", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" })
      .from("#search", { opacity: 0, y: 10, duration: 1, ease:"back.out(1.7)" }, "-=1")
      .from("#formSearch", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" }, "-=.5")
      .from("#downButton", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" }, "-=.5")
      .from("#downButton", { y: 5, repeat: -1, duration: 1.5, yoyo: true });
    
    return ()=> {
      tl.kill();
    }
  },[]);

  return(
    <MainCont 
      src={state.home.hero.background} first height="100vh"
      
    >
        {/*<Video
          src={require('../../videos/living.mp4')}
          autoPlay
          loop
          muted
          playsinline
          poster={require('../../videos/living.webp')}
        />         
        <VideoOverLay /> */}

      <RateBarCont>
        <RateBar />
      </RateBarCont>
      <Container>
        <InfoCont>
          <Title id="title">
          Te ayudamos a conectar con la propiedad perfecta para tí.          </Title>
          <Parrafo id="search">
          Corredora de Propiedades Boutique en Santiago Oriente 
          </Parrafo>
          <Link to="about">
            <Button id="formSearch" primary>Saber más</Button>
          </Link>
        </InfoCont>
      </Container>
    </MainCont>
  )
}