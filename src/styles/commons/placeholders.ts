import { css } from 'styled-components';
import { media } from './media';

export const fullscreen = css`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const pageInner = css`
  margin-left: 10px;
  margin-right: 10px;

  ${media.small`
    margin-left: 20px;
    margin-right: 20px;
  `}

  ${media.medium`
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.large`
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const image = css`
  display: block;
  max-width: 100%;
`;

/**
 * Reset
 */
export const resetButton = css`
  display: inline-block;
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  appearance: none;

  user-select: none;
  touch-action: none;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:focus {
    outline: none;
  }
`;

export const resetInput = css`
  padding: 0;
  border: 0;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
`;
