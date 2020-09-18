import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

import {} from '../../../styles/commons/variables';
import { page_inner } from '../../../styles/commons/placeholders';

import Slogan from '../../components/sections/Slogan';
import Features from '../../components/sections/Features';
import Faq from '../../components/sections/Faq';
// import Kenosis from '../../components/sections/Kenosis';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resell Chart - Track your sales on mobile</title>
        <meta
          name="description"
          content="Long gone the times of using mobile excel spread sheets. Now simply use Resell Chart to track and analyze your sales."
        />
      </Helmet>
      <Inner>
        <Slogan />
        <Features />
        <Faq />
      </Inner>
    </>
  );
};

const Inner = styled.main`
  ${page_inner};

  section {
    margin-bottom: 90px;

    h1,
    h2 {
      margin-bottom: 15px;
    }

    h1 + p,
    h2 + p {
      margin-bottom: 40px;
    }
  }
`;
