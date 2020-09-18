import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import BurgerIcon from '../icons/Burger';

import { deep_sky_blue, family_title } from '../../../styles/commons/variables';
import { font_big, reset_button } from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    { name: 'Pricing', link: 'pricing' },
    { name: 'FAQ', link: 'faq' },
    { name: 'Contact', link: 'contact' },
  ];

  console.log(menuOpen);
  return (
    <Container>
      <Logo>
        <Link to="/">Resell Chart</Link>
      </Logo>

      <LinksContainer menuOpen={menuOpen}>
        <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <Burger />
        </BurgerButton>
        <List>
          {routes.map(route => (
            <Route key={route.name + route.link}>
              <Link to={route.link}>{route.name}</Link>
            </Route>
          ))}
          <Dashboard>
            <Link to="dashboard">Dashboard</Link>
          </Dashboard>
        </List>
      </LinksContainer>
    </Container>
  );
};

// const unit = css`10px`;

const Container = styled.header`
  position: relative;

  width: 100%;

  margin-bottom: 30px;
  padding: 15px 10px;

  ${media.normal`
    display: flex;
    flex-direction: row;
  `}
`;

const Logo = styled.div`
  display: inline-block;
  

  ${font_big}
  font-family: ${family_title};

  ${media.normal`
    flex-grow: 1;
  `}
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
      return 'transform: translateX(0);';
    }

    return 'transform: translateX(calc(100% - 50px));';
  }}

  display:flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  right: 0;

  padding: 10px;

  background-color: rgba(255, 255, 255, 0.05);

  ${media.normal`
    display: block;
    position: static;

    padding: 0;

    transform: none;
    background-color: unset;
  `};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 50px;

  ${media.normal`
    flex-direction: row;

    margin-left: 0;
  `}
`;

const Route = styled.li`
  padding: 0 30px;
`;

const Dashboard = styled.li`
  margin-left: 10px;
  padding: 15px 30px;
  border-radius: 26px;
  background-color: ${deep_sky_blue};
`;

export default Header;
