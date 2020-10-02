import { css } from 'styled-components';
import {
  font_large,
  font_larger,
  font_big,
  font_biggest,
} from './placeholders';

const general = css`
  a {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  h1 {
    ${font_biggest}
  }

  h2 {
    ${font_big}
  }

  h3 {
    ${font_larger}
  }

  h4 {
    ${font_large}
  }
`;

export default general;
