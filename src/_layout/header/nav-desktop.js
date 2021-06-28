import React, { useContext } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
import { LinkButton as Button } from '../../_components/buttons';
import RateBar from './rate-bar';

const MainCont = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //color: rgba(255, 255, 255, .6);
`
const NavBar = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: black;
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
  &:visited{
    color: rgba(255, 255, 255, .6);
  }
`
const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
  margin-right: .5rem;
  transition: 250ms ease;
  /*${Button}:hover & {
    fill: ${props => props.theme.main.primaryColor};
  }*/
`
const LoginButton = styled.a`
    min-width: 160px;
    min-height: 44px;
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #1c8742;
    border-color: #1c8742;
    color: #FFFFFF;
    -webkit-transition: 250ms ease;
    transition: 250ms ease;
  &:visited{
    color: #fff;
  }  
  &:hover{
    background-color: hsl(141,66%,45%);
    color: #fff;
  }
`

export default ()=> {
  const state = useContext(context)
  return(
    <MainCont>
      <Logo />
      <NavBar>
        <NavItem noMargin>
          <Link to={`/properties`}>
            <NavLink>
              Propiedades
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/about`}>
            <NavLink>
              Nosotros
            </NavLink>
          </Link>
        </NavItem>        
        <NavItem>
          <Link to="/services">
            <NavLink>
              Servicios
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/contact`}>
            <NavLink>
              Contacto
            </NavLink>
          </Link>
        </NavItem>                          
      </NavBar>
      <RateBar />
      <LoginButton
        href={`http://app.clasihome.com/login?logo=${state.main.logo.value}&primaryColor=${state.main.primaryColor.substring(1)}`}
      >
        Login
      </LoginButton>
  </MainCont>
  )
}