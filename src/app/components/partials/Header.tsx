import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { css } from 'styled-components';

import {
  deep_sky_blue,
  cinder,
  family_title,
} from '../../../styles/commons/variables';
import {
  font_normal,
  font_big,
  reset_button,
  links,
} from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';

// import useOnScreen from '../../../hooks/useOnScreen';
import BurgerIcon from '../icons/Burger';

interface Props {
  forwardRef?: any;
  sticky: Boolean;
  className?: undefined;
}

const Header: React.FC<Props> = ({ forwardRef, sticky, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { name: 'Pricing', link: 'pricing' },
    { name: 'FAQ', link: 'faq' },
    { name: 'Contact', link: 'contact' },
  ];
  console.log(sticky);

  return (
    <Container ref={forwardRef} className={className}>
      <Logo sticky={sticky}>
        <Link to="/">Resell Chart</Link>
      </Logo>

      <LinksContainer menuOpen={menuOpen}>
        <List>
          {routes.map(route => (
            <Route key={route.name + route.link}>
              <Link to={route.link}>{route.name}</Link>
            </Route>
          ))}
          <Dashboard sticky={sticky}>
            <Link to="dashboard">Dashboard</Link>
          </Dashboard>
        </List>
      </LinksContainer>
      <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
        <Burger />
      </BurgerButton>
    </Container>
  );
};

// const unit = css`10px`;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

const Logo = styled.div<{ sticky: Boolean }>` 
  flex-grow: 1;
  ${font_big}
  font-family: ${family_title};
  
 ${({ sticky }) =>
   sticky
     ? css`
         ${font_normal}
       `
     : ''}

  transition-delay: 0;
  transition-duration: 200ms;
  transition-property: height font-size;
  transition-timing-function: linear;
`;

const BurgerButton = styled.button`
  ${reset_button};

  display: block;

  width: 33px;
  height: auto;

  ${media.normal`
    appearance: none;
    display:none;
  `}
`;

const Burger = styled(BurgerIcon)`
  width: 100%;
  height: auto;
`;

const LinksContainer = styled.nav<{ menuOpen: boolean }>`
  ${({ menuOpen }) => {
    if (menuOpen) {
      return css`
        transform: translateX(0);
        box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.5);
      `;
    }

    return 'transform: translateY(calc(-100%));';
  }}

  display:flex;
  flex-direction: column;

  position: absolute;

  width: 100%;
  top: 0;
  right: 0;

  padding: 25px 0;

  background-color: ${cinder};

  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-out;

  ${media.normal`
    display: block;
    position: static;

    width: unset;
    height: unset;
    top: unset;
    right: unset;

    padding: 0;

    transform: none;
    background-color: unset;
  `};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.normal`
    flex-direction: row;
  `}
`;

const Route = styled.li`
  ${links}
  margin-bottom: 1em;

  ${media.normal`
    margin-bottom: 0;
    padding: 0 30px;
  `}
`;

const Dashboard = styled.li<{ sticky: Boolean }>`
  margin-left: 10px;

  padding: 15px 30px;
  vertical-align: middle;

  border-radius: 25px;
  background-color: ${deep_sky_blue};

  ${({ sticky }) =>
    sticky
      ? css`
          padding: 7px 20px;
        `
      : ''}
`;

export default Header;
