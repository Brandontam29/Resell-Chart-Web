import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { blue } from '../../../styles/commons/variables';
const Header = () => {
  const routes = [
    { name: 'Buy Now', link: 'buy-now' },
    { name: 'Features', link: 'features' },
    { name: 'How to Use', link: 'how-to-use' },
    { name: 'FAQ', link: 'faq' },
    { name: 'Help', link: 'help' },
  ];

  return (
    <Container>
      <LogoContainer>
        <Image>image</Image>
      </LogoContainer>

      <RoutesContainer>
        {routes.map(route => (
          <Link key={route.name + route.link} to={route.link}>
            <Route>{route.name}</Route>
          </Link>
        ))}
        <Dashboard>
          <Link to={'dashboard'}>Dashboard</Link>
        </Dashboard>
      </RoutesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 10px;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
`;

const Image = styled.div`
  display: inline-block;
`;

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Route = styled.div`
  padding: 20px 10px;
  border: 1px dotted #fff;
`;

const Dashboard = styled.div`
  padding: 10px 20px;
  border-radius: 50%;
  background-color: ${blue};
`;
export default Header;
