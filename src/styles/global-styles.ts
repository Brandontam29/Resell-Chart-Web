import { createGlobalStyle } from 'styled-components/macro';

import fonts from './commons/fonts';
import reset from './commons/reset';
import general from './commons/general';
import { font_normal } from './commons/placeholders';
import { white, cinder, family_text } from './commons/variables';

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${reset};
  ${general};
  

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;

    ${font_normal};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    color: ${white};
    background-color: ${cinder};
    font-family: ${family_text};
  }
`;
