import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { WhatsAppOutlined, InstagramFilled, MailOutlined } from '@ant-design/icons';

import Logo from './logo';
import RateBar from './ratebar';
import { NavLink } from '../styled-components';

const Header = styled.header`
  //overflow: hidden;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: .5rem 0;
  z-index: 1000;
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavPanel = styled.div`
  background-color: #fff;
  height: calc(100vh - 81.38px);
  width: 100vw;
  transition: 500ms ease;
  position: fixed;
  left: ${props => props.visible ? "0" : "100vw"};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0mm;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  font-size: 2rem;
`

export default ()=> {
  const [open, setOpen] = useState(false);
  const state = useContext(context);
  return(
    <Fragment>
    <Header className="d-lg-none">
      <Container>
        <Navigation>
          <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
            <Logo />
          </AniLink>
          <HamburgerMenu
            isOpen={open}
            menuClicked={()=> setOpen(!open)}
            width={24}
            height={15}
            strokeWidth={2}
            rotate={0}
            color={state.primaryColor}
            borderRadius={0}
            animationDuration={0.5}
          />          
        </Navigation>
      </Container>
    </Header>
    <NavPanel visible={open}>
      <RateBar />
      <NavList>
      <NavItem>
          <AniLink paintDrip hex={state.primaryColor} to="/" onClick={()=> setOpen(false)} duration={.5}>
            <NavLink dark>
              Inicio
            </NavLink>
          </AniLink>
        </NavItem>
        <NavItem>
          <AniLink paintDrip hex={state.primaryColor} to="/properties" onClick={()=> setOpen(false)} duration={.5}>
            <NavLink dark>
              Propiedades
            </NavLink>
          </AniLink>
        </NavItem>
        <NavItem>
          <AniLink paintDrip hex={state.primaryColor} to="/sales" onClick={()=> setOpen(false)} duration={.5}>
            <NavLink dark>
              Real State
            </NavLink>
          </AniLink>
        </NavItem>
        <NavItem>
          <AniLink paintDrip hex={state.primaryColor} to="/relocation" onClick={()=> setOpen(false)} duration={.5}>
            <NavLink dark>
              Relocation
            </NavLink>
          </AniLink>
        </NavItem>
        <NavItem>
          <AniLink paintDrip hex={state.primaryColor} to="/about" onClick={()=> setOpen(false)} duration={.5}>
            <NavLink dark>
              Nosotros
            </NavLink>
          </AniLink>
        </NavItem>                
      </NavList>
      <NavList horizontal>
        <NavItem>
          <AniLink href={state.instagram} target="_blank" rel="noopener">
            <NavLink dark>
              <InstagramFilled />
            </NavLink>
          </AniLink>
        </NavItem>           
        <NavItem>
          <AniLink title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${state.movil.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20uestedes.`}>
            <NavLink dark>
              <WhatsAppOutlined style={{ margin: "0 1rem" }} />
            </NavLink>
          </AniLink>
        </NavItem>           
        <NavItem>
          <AniLink title="Enviar un email" href={`mailto:${state.email}`}>
            <NavLink dark>
              <MailOutlined />
            </NavLink>
          </AniLink>
        </NavItem>                           
      </NavList>
    </NavPanel>
  </Fragment>      
  )
}