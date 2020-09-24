import { css } from 'styled-components';
import Gobold from '../../fonts/Gobold-Regular.otf';

const fonts = css`
  @font-face {
    font-family: 'Gobold';
    font-weight: 400;
    font-style: normal;
    src: url(${Gobold}) format('opentype');
  }
`;

export default fonts;
