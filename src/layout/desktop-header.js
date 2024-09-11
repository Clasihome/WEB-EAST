import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FacebookFilled, WhatsAppOutlined, InstagramFilled, LinkedinFilled, MailOutlined } from '@ant-design/icons';

import context from '../context';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(80, 80, 80, 0.8));
  position: absolute;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  z-index: 1000;
  transition: transform 0.9s ease;
  transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : 'translateY(0)')};
`;

const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: ${({ light }) => light ? "2px solid #fff" : "2px solid rgba(37, 17, 4, 1)"};
`;

const InnerNav = styled.div`
  display: flex;
  align-items: flex-end;
  color: blue;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ horizontal }) => horizontal ? "flex" : "block"};
  text-align: center;
`;

const NavItem = styled.li``;

const NavLinkCustom = styled(NavLink)`
  color: rgba(37, 17, 4, 1);
  position: relative;
  left:8rem;
  &:hover {
    color: rgba(37, 17, 4, 1);
  }
`;

const NavLinkLine = styled.div`
  position: absolute;
  bottom: -23px;
  left: 0;
  width: 0;
  height: 5px;
  background-color: rgba(37, 17, 4, .0);
  transition: 250ms ease;
  ${NavLinkCustom}:hover & {
    background-color: rgba(37, 17, 4, 1);
    width: 100%;
  }
`;

const SocialNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  li + li {
    margin-left: 1rem;
  }
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  font-size: 1.5rem;
  transition: 250ms ease;
  color: rgba(37, 17, 4, .7);
  &:visited {
    color: rgba(37, 17, 4, .7);
  }
  &:hover {
    color: rgba(37, 17, 4, 1);
  }
`;

export default ({ dark, light }) => {
  const state = useContext(context);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Header isHidden={isHidden} className="d-none d-lg-block" light={light}>
      <Container>
        <Navigation light={light}>
          <InnerNav>
            <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
              <Logo dark={dark} light={!dark} />
            </AniLink>
            <NavList horizontal>
              <NavItem>
                <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
                  <NavLinkCustom dark={dark} light={!dark}>
                    Inicio
                    <NavLinkLine />
                  </NavLinkCustom>
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                  <NavLinkCustom dark={dark} light={!dark}>
                    Propiedades
                    <NavLinkLine />
                  </NavLinkCustom>
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink paintDrip hex={state.primaryColor} to="/sales" duration={.5}>
                  <NavLinkCustom dark={dark} light={!dark}>
                    Real State
                    <NavLinkLine />
                  </NavLinkCustom>
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink paintDrip hex={state.primaryColor} to="/relocation" duration={.5}>
                  <NavLinkCustom dark={dark} light={!dark}>
                    Relocation
                    <NavLinkLine />
                  </NavLinkCustom>
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink paintDrip hex={state.primaryColor} to="/about" duration={.5}>
                  <NavLinkCustom dark={dark} light={!dark}>
                    Nosotros
                    <NavLinkLine />
                  </NavLinkCustom>
                </AniLink>
              </NavItem>
            </NavList>
          </InnerNav>
          <SocialNav>
         
            <SocialItem>
              <SocialLink href={state.instagram} rel="noopener" target="_blank">
                <InstagramFilled />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${state.movil.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20uestedes.`}>
                <WhatsAppOutlined />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink title="Enviar un email" href={`mailto:${state.email}`}>
                <MailOutlined />
              </SocialLink>
            </SocialItem>
          
          </SocialNav>
        </Navigation>
      </Container>
    </Header>
  );
};
