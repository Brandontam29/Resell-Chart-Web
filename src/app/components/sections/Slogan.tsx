import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { deep_sky_blue } from '../../../styles/commons/variables';
import { image, font_large } from '../../../styles/commons/placeholders';

import screens3 from '../../../images/3screens.png';

export const Slogan: React.FC = () => {
  return (
    <Container>
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

const Heading = styled.div``;

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
`;

export default Slogan;
