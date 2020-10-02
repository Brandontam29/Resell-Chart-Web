import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { deep_sky_blue } from '../../../../styles/commons/variables';
import {
  image,
  font_large,
  image_shadow,
} from '../../../../styles/commons/placeholders';

import screens3 from '../../../../images/3screens.png';

interface Props {
  forwardRef?: any;
  className?: undefined;
}

export const Slogan: React.FC<Props> = ({ forwardRef, className }) => {
  return (
    <Container ref={forwardRef} className={className}>
      <Heading>
        <h1>Track your Sales</h1>
        <p>Simple, Organized, Efficient</p>
      </Heading>
      <Start>
        <Link to={'pricing'}>
          <StartButton>Start Now</StartButton>
        </Link>
      </Start>
      <Screens3 src={screens3} alt="Display of the App on three smart phones" />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  text-align: center;
`;

const Heading = styled.header``;

const Start = styled.div`
  margin-bottom: 40px;
`;

const StartButton = styled.div`
  display: inline-block;
  padding: 15px 30px;

  border-radius: 25px;
  background-color: ${deep_sky_blue};

  ${font_large}
`;

const Screens3 = styled.img`
  ${image}
  ${image_shadow}

  width: 100%;
  max-width: 740px;
  margin: 0 auto;
`;

export default Slogan;
