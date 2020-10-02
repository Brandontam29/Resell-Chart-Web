import { css, keyframes } from 'styled-components';
import {} from './variables';
import {} from './media';

/**
 * keyframes
 */
export const key_fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * placeholders
 */
export const fadeIn = css`
  opacity: 0;

  animation-name: ${key_fadeIn};
  animation-iteration-count: 1;
  animation-duration: 1200ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;
