import React from 'react';
import styled from 'styled-components'
import { Button } from '../button';
import { BrandLogo } from '../logo/brandLogo';
import { Marginer } from '../marginer/index'

const NavBarContainer = styled.div`
  width: 100;
  height: 65px;
  display: flex;
  align-items: center;
  padding:0 1.5em;
  justify-content:space-between;
`;

const AccessibilityContainer = styled.div`
  height:100%;
  display:flex;
  align-items: center;
`;

const AchoreLink = styled.a`
  font-size:12px;
  color:#fff;
  cursor:pointer;
  text-decoration:none;
  outline:none;
  transition:a;all 200ms ease-in-out;

  &:hover{
    filter:contrast(0.6);
  }
`

const Seperator = styled.div`
  min-height:43%;
  width:1px;
  background-color:#fff;
`

export function NavBar(props) {
  return (
    <NavBarContainer>
       <BrandLogo/>
      <AccessibilityContainer>
        < AchoreLink>Specialists Portal</ AchoreLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
           <Marginer direction="horizontal" margin={10} />
        <Button size={10}>Register</Button>
        <Marginer direction="horizontal" margin={8}/>
        < AchoreLink>Login</ AchoreLink>
      </AccessibilityContainer>  
  </NavBarContainer>)
}
