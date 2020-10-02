import React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
// import { Doughnut } from 'react-chartjs-2';

import {} from '../../../styles/commons/variables';
import { footer_inner } from '../../../styles/commons/placeholders';

import LineGraph from '../../components/partials/LineGraph';

export const DashboardPage: React.FC = () => {
  // const doughnutData = {
  //   labels: ['Red', 'Green', 'Yellow'],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  // };

  return (
    <>
      <Helmet>
        <title>Resell Chart - Dashboard</title>
        <meta
          name="description"
          content="Visually analyze your streetwear sales."
        />
      </Helmet>
      <Inner>
        <Heading>
          <h1>Dashboard</h1>
          <p>Are you really making money?</p>
        </Heading>
        <section>
          <LineGraph />
        </section>
        <DashboardContainer>
          {/* <Doughnut data={doughnutData} options={options} /> */}
        </DashboardContainer>
      </Inner>
    </>
  );
};

const Inner = styled.main`
  ${footer_inner}
  width: 100%;

  section {
    margin-bottom: 90px;
  }
`;

const Heading = styled.header`
  width: 100%;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    margin-bottom: 15px;
  }
`;

const DashboardContainer = styled.section`
  width: 100%;
  text-align: center;
`;
