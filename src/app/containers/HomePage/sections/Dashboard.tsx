import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import {} from '../../../../styles/commons/variables';
import {} from '../../../../styles/commons/placeholders';
import {} from '../../../../styles/commons/media';

import LineGraph from '../../../components/partials/LineGraph';

interface Props {
  forwardRef?: any;
  className?: any;
}

export const Dashboard: React.FC<Props> = ({ forwardRef, className }) => {
  return (
    <Container ref={forwardRef} className={className}>
      <Heading>
        <h1>
          <Link to="dashboard">Dashboard</Link>
        </h1>
        <p>See your money go up</p>
      </Heading>
      <LineGraph />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  text-align: center;
`;

const Heading = styled.header``;

export default Dashboard;
