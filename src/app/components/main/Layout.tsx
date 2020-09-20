import React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`;

export default Layout;
