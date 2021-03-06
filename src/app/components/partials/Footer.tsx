import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import Discord from '../icons/Discord';
import Twitter from '../icons/Twitter';

import {} from '../../../styles/commons/variables';
import {
  footer_inner,
  font_small,
  small_links,
} from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';

interface Props {
  forwardRef?: { current: any };
  className?: undefined | string;
}
const Footer: React.FC<Props> = ({ forwardRef, className }) => {
  return (
    <Container ref={forwardRef} className={className}>
      <div>
        <h4>Media</h4>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.discord.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Discord />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h4>Legal</h4>
        <nav>
          <ul>
            <li>
              <Link to="privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="terms_conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  ${footer_inner};
  ${font_small};

  display: flex;
  flex-direction: row;

  width: 100%;
  grid-row-start: 3;
  grid-row-end: 4;

  padding: 50px 0 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
  }

  h4 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      ${small_links}
      margin-right: 15px;

      :last-child {
        margin-right: 0;
      }
    }
  }

  ${media.small`
    padding-bottom: 25px;
  `}
`;

export default Footer;
