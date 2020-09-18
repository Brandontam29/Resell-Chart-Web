import { css } from 'styled-components';
import { font_normal, font_large, font_larger, font_big } from './placeholders';
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
    ${font_big}
  }

  h2 {
    ${font_larger}
  }

  h3 {
    ${font_large}
  }

  h4 {
    ${font_normal}
  }
`;

export default general;
