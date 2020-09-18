import { css } from 'styled-components';
import {
  smaller_mobile,
  smaller_desktop,
  smaller_wide,
  small_mobile,
  small_desktop,
  small_wide,
  normal_mobile,
  normal_desktop,
  normal_wide,
  large_mobile,
  large_desktop,
  large_wide,
  larger_mobile,
  larger_desktop,
  larger_wide,
  big_mobile,
  big_desktop,
  big_wide,
} from './variables';
import { media } from './media';

export const fullscreen = css`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const page_inner = css`
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
  `}
`;

export const footer_inner = css`
  margin-left: 10px;
  margin-right: 10px;

  ${media.small`
    margin-left: 20px;
    margin-right: 20px;
  `}

  ${media.medium`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.large`
    max-width: 1300px;
  `}
`;

export const image = css`
  display: block;
  max-width: 100%;
  height: auto;
`;

/*
 * Fonts
 */
export const font_smaller = css`
  font-size: ${smaller_mobile};

  ${media.medium`
    font-size: ${smaller_desktop};
  `}

  ${media.xlarge`
    font-size: ${smaller_wide};
  `}
`;

export const font_small = css`
  font-size: ${small_mobile};

  ${media.medium`
    font-size: ${small_desktop};
  `}

  ${media.xlarge`
    font-size: ${small_wide};
  `}
`;

export const font_normal = css`
  font-size: ${normal_mobile};

  ${media.medium`
    font-size: ${normal_desktop};
  `}

  ${media.xlarge`
    font-size: ${normal_wide};
  `}
`;

export const font_large = css`
  font-size: ${large_mobile};

  ${media.medium`
    font-size: ${large_desktop};
  `}

  ${media.xlarge`
    font-size: ${large_wide};
  `}
`;

export const font_larger = css`
  font-size: ${larger_mobile};

  ${media.medium`
    font-size: ${larger_desktop};
  `}

  ${media.xlarge`
    font-size: ${larger_wide};
  `}
`;

export const font_big = css`
  font-size: ${big_mobile};

  ${media.medium`
    font-size: ${big_desktop};
  `}

  ${media.xlarge`
    font-size: ${big_wide};
  `}
`;

/*
 * Reset
 */
export const reset_button = css`
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

export const reset_input = css`
  padding: 0;
  border: 0;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
`;
