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
      <Header className={headerCss} />
      {children}
      <Footer />
    </Container>
  );
};

const headerCss = css`
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
`;

export default Layout;
