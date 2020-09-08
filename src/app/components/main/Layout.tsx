import React from 'react';
import styled from 'styled-components/macro';
import Header from '../partials/Header';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div``;

export default Layout;
