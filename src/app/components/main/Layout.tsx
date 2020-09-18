import React from 'react';
import styled from 'styled-components/macro';

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

const Container = styled.div``;

export default Layout;
