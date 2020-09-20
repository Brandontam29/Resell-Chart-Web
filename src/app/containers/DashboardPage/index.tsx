import React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Doughnut } from 'react-chartjs-2';

import {} from '../../../styles/commons/variables';
import { footer_inner } from '../../../styles/commons/placeholders';

export const DashboardPage = () => {
  const doughnutData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

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
        <DashboardContainer>
          <Heading>
            <h1>Dashboard</h1>
            <p>Are you really making money?</p>
          </Heading>

          <Doughnut data={doughnutData} />
        </DashboardContainer>
      </Inner>
    </>
  );
};

const Inner = styled.main`
  ${footer_inner};

  section {
    margin-bottom: 90px;

    h1,
    h2 {
      margin-bottom: 15px;
    }

    header {
      margin-bottom: 40px;
    }
  }
`;

const Heading = styled.header`
  width: 100%;
  text-align: center;
`;

const DashboardContainer = styled.section`
  width: 100%;
  text-align: center;
`;
