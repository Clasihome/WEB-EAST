import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FacebookFilled, WhatsAppOutlined, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background-color: ${props => props.light ? "#fff" : "transparent"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: ${props => props.light ? "2px solid #fff" : "2px solid rgba(37, 17, 4, 1)"};
`
const InnerNav = styled.div`
  display: flex;
  align-items: flex-end;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  
`
const NavLinkCustom = styled(NavLink)`
  color: rgba(37, 17, 4, 1);
  position: relative;
  &:hover{
    color: rgba(37, 17, 4, 1);
  }
`
const NavLinkLine = styled.div`
  position: absolute;
  bottom: -23px;
  left: 0;
  width: 0;
  height: 5px;
  background-color: rgba(37, 17, 4, .0);
  transition: 250ms ease;
  @media(min-width: 768px){
    bottom: -21px;
  }
  @media(min-width: 992px){
    bottom: -23px;
  }  
  ${NavLinkCustom}:hover & {
    background-color: rgba(37, 17, 4, 1);
    width: 100%;
  }
`
const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  li + li{
    margin-left: 1rem;
  }
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  transition: 250ms ease;
  color: rgba(37, 17, 4, .7);
  &:visited{
    color: rgba(37, 17, 4, .7);
  }
  &:hover{
    color: rgba(37, 17, 4, 1);
  }
`

export default ({ dark, light })=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block" light={light}>
      {/* <RateBar /> */}
      <Container>
        <Navigation light={light}>
          <InnerNav>
          <AniLink paintDrip hex="#5E90F2" to="/" duration={.5}>
            <Logo dark={dark} light={!dark} />
          </AniLink>
          <NavList horizontal>
            <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Inicio
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>            
            </NavItem>            
            <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/properties" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Propiedades
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/sales" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Venta
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>            
            </NavItem>
            {/* <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&limit=12&typeId=office&id=5e8e36b31c9d440000d35090&propertyType=&operation=ARRIENDO&commune=&stringSearch=&priceMin=&priceMax=&totalAreaFrom=&totalAreaTo=&bedrooms=&bathrooms=&currency=CLP" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Arriendo
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>            
            </NavItem>                         */}
            <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/about" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Nosotros
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex="#5E90F2" to="/contact" duration={.5}>
                <NavLinkCustom dark={dark} light={!dark}>
                  Contacto
                  <NavLinkLine />
                </NavLinkCustom>
              </AniLink>                                    
            </NavItem>
          </NavList>
          </InnerNav>
          <SocialNav>
            <SocialItem>
              <SocialLink
                rel="noopener"
                target="_blank"
                href="#"
              >
                <FacebookFilled />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                rel="noopener"
                target="_blank"
                href="#"
              >
                <InstagramFilled />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                rel="noopener"
                target="_blank"
                href="#"
              >
                <LinkedinFilled />
              </SocialLink>
            </SocialItem>                                    
          </SocialNav>
        </Navigation>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    </Header>    
  )
}