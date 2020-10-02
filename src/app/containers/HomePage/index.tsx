import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { css } from 'styled-components';

import {} from '../../../styles/commons/variables';
import { page_inner } from '../../../styles/commons/placeholders';
import { fadeIn } from '../../../styles/commons/animations';

import Slogan from './sections/Slogan';
import Features from './sections/Features';
import Dashboard from './sections/Dashboard';
import Faq from './sections/Faq';

import { useEntered } from '../../../hooks/useEntered';

export const HomePage: React.FC = () => {
  const refFeatures = useRef();
  const refDashboard = useRef();
  const refFaq = useRef();
  const appearFeatures = useEntered(refFeatures, '0px');
  const appearDashboard = useEntered(refDashboard, '0px');
  const appearFaq = useEntered(refFaq, '0px');

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
        <SloganStyle />
        <FeaturesStyle forwardRef={refFeatures} appear={appearFeatures} />
        <DashboardStyle forwardRef={refDashboard} appear={appearDashboard} />
        <FaqStyle forwardRef={refFaq} appear={appearFaq} />
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

    header {
      margin-bottom: 40px;
    }
  }
`;
const SloganStyle = styled(Slogan)`
  ${fadeIn}
`;

const FeaturesStyle = styled(Features)<{ appear: Boolean }>`
  ${({ appear }) =>
    appear
      ? css`
          ${fadeIn}
        `
      : css``};
`;

const DashboardStyle = styled(Dashboard)<{ appear: Boolean }>`
  ${({ appear }) =>
    appear
      ? css`
          ${fadeIn}
        `
      : css``};
`;

const FaqStyle = styled(Faq)<{ appear: Boolean }>`
  ${({ appear }) =>
    appear
      ? css`
          ${fadeIn}
        `
      : css``};
`;
