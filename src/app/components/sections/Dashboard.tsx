import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import {
  carnation_pink,
  red,
  // white,
  deep_sky_blue,
} from '../../../styles/commons/variables';
import {} from '../../../styles/commons/placeholders';

export const Dashboard: React.FC = () => {
  console.log(red);
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Resell Chart',
        fill: false,
        lineTension: 0,
        borderColor: deep_sky_blue,
        pointBackgroundColor: deep_sky_blue,
        pointRadius: 3,

        data: [200, 230, 350, 240, 370, 300, 390, 420, 345, 330, 460, 480],
      },
      {
        label: 'Freestyle',
        fill: false,
        lineTension: 0,
        borderColor: red,
        pointBackgroundColor: red,
        pointRadius: 3,

        data: [300, 30, 210, 345, 125, 185, 195, 300, 65, 250, 240, 190],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Streetwear Revenue',
      fontSize: 24,
    },
    legend: {
      display: true,
      position: 'top',
    },
    gridlines: {
      color: 'rgba(255,255,255, 0.9)',
    },
    tooltips: false,
    responsive: true,
  };

  return (
    <Container>
      <Heading>
        <h1>
          <Link to="dashboard">Dashboard</Link>
        </h1>
        <p>Visual analytics</p>
      </Heading>
      <GraphContainer>
        <Line data={data} options={options} />
      </GraphContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  text-align: center;
`;

const Heading = styled.header``;

const GraphContainer = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.05);
`;
export default Dashboard;
