import React, { useState } from 'react'; //
import styled from 'styled-components/macro';
import { css } from 'styled-components';

import {} from '../../../styles/commons/variables';
import { font_small } from '../../../styles/commons/placeholders';
import {} from '../../../styles/commons/media';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [sticky, setScrolled] = useState(false);

  window.onscroll = () => scrollFunction(80);

  const scrollFunction = (threshold: number) => {
    if (
      document.body.scrollTop > threshold ||
      document.documentElement.scrollTop > threshold
    ) {
      return setScrolled(true);
    }
    return setScrolled(false);
  };

  console.log(sticky);
  return (
    <Container sticky={sticky}>
      <HeaderStyled sticky={sticky} />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div<{ sticky: Boolean }>`
  ${({ sticky }) =>
    sticky
      ? css`
          margin-top: 80px;
        `
      : css`
          margin-top: 120px;
        `};

  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`;

const HeaderStyled = styled(Header)<{ sticky: Boolean }>`
  ${({ sticky }) =>
    sticky
      ? css`
          ${font_small};
          height: 40px;
        `
      : css`
          height: 80px;
        `};
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(15, 15, 15, 0.8);
  backdrop-filter: saturate(180%) blur(20px);

  transition-delay: 0;
  transition-duration: 200ms;
  transition-property: height font-size;
  transition-timing-function: linear;
`;

export default Layout;
//   ${({ sticky }) => (sticky ? 'height: 40px' : 'height: 80px')};
