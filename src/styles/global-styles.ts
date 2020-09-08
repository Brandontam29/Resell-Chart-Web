import { createGlobalStyle } from 'styled-components';
import reset from './commons/reset';
import general from './commons/general';
import { white, black } from './commons/variables';

export const GlobalStyle = createGlobalStyle`
${reset}
${general}

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: $font-size-normal-small;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    @media #{$mq-medium-screen} {
      font-size: $font-size-normal;
  }

  body {
    color: ${white};
    background-color: ${black};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
