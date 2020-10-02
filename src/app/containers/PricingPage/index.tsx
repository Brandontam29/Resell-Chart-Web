import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { Helmet } from 'react-helmet-async';

import { deep_sky_blue } from '../../../styles/commons/variables';
import { page_inner, reset_button } from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';
import PricingCards from '../../components/partials/PricingCards';

interface CardProp {
  heading: string;
  description: string;
  pricing: {
    cost: number | string;
    description: {
      monthly: string;
      yearly: string;
    };
  };
  features: string[];
}

export const PricingPage: React.FC = () => {
  const [monthly, setMonthly] = useState(true);

  const soloCards = [
    {
      heading: 'Free',
      description: 'Perfect for individuals',
      pricing: {
        cost: 0,
        description: {
          monthly: '',
          yearly: '',
        },
      },
      features: [
        'Up to 40 items',
        'Desktop + 1 mobile device',
        '1 Graph analysis',
        'Data import',
      ],
    },
    {
      heading: 'Premium',
      description: 'Track everything to the details',
      pricing: {
        cost: 4,
        description: {
          monthly: '',
          yearly: '',
        },
      },
      features: [
        'Unlimited items',
        'Unlimited devices',
        'All graph analysis',
        'Data import & export',
        'Advanced search',
        'Premium customer support',
      ],
    },
    {
      heading: 'Group Buys Premium',
      description: 'Premium for 8 individuals',
      // discountText: '25% off',
      pricing: {
        cost: 3,
        description: {
          monthly: '',
          yearly: '',
        },
      },
      features: [
        'Unlimited items',
        'Unlimited devices',
        'All graph analysis',
        'Data import & export',
        'Advanced search',
        'Premium customer support',
      ],
    },
  ];

  const teamCards = [
    {
      heading: 'Teams',
      description: 'Manage teams and control inventory',
      pricing: {
        cost: 19,
        description: {
          monthly: 'per user per month',
          yearly: 'per user per month, billed annually',
        },
      },
      features: [
        'Unlimited items',
        'Unlimited devices',
        'All graph analysis',
        'Data import & export',
        'Advanced search',
        'Premium customer support',
      ],
    },
    {
      heading: 'Large Teams',
      description: 'Manage large teams and organize everything',
      pricing: {
        cost: 29,
        description: {
          monthly: 'per user per month',
          yearly: 'per user per month, billed annually',
        },
      },
      features: [
        'Unlimited items',
        'Unlimited devices',
        'All graph analysis',
        'Data import & export',
        'Advanced search',
        'Premium customer support',
      ],
    },
    {
      heading: 'Entreprise',
      description: 'Solutions for your large or complex organization',
      pricing: {
        cost: 'Contact us',
        description: {
          monthly: '',
          yearly: '',
        },
      },
      features: ['Custom solutions', 'Priority support'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Resell Chart - Pricing</title>
        <meta
          name="description"
          content="Start now. It's free! If you are working in bigger teams, start your 14 day free trial. Tons of features"
        />
      </Helmet>
      <Inner>
        <Heading>
          <h1>Pricing</h1>
          <p>Start for free then find the right plan</p>
        </Heading>

        <ButtonSection>
          <ToggleMonthly onClick={() => setMonthly(!monthly)}>
            Toggle
          </ToggleMonthly>
          Get two months free with yearly
        </ButtonSection>
        <SoloSection>
          <SubHeading>
            <h2>Personal</h2>
            <p>Start for free then find the right plan</p>
          </SubHeading>
          <CardsContainer>
            <PricingCards
              cards={soloCards}
              condition={monthly}
              className={cardClassName}
            />
          </CardsContainer>
        </SoloSection>
        <TeamSection>
          <SubHeading>
            <h2>Teams</h2>
            <p>Start for free then find the right plan</p>
          </SubHeading>
          <CardsContainer>
            <PricingCards
              cards={teamCards}
              condition={monthly}
              className={cardClassName}
            />
          </CardsContainer>
        </TeamSection>
      </Inner>
    </>
  );
};

const Inner = styled.main`
  ${page_inner}

  section {
    margin-bottom: 90px;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
`;

const ToggleMonthly = styled.button`
  ${reset_button}

  padding: 20px;
  background-color: ${deep_sky_blue};
`;

const Heading = styled.header`
  width: 100%;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    margin-bottom: 15px;
  }
`;

const SubHeading = styled.header`
  margin-bottom: 40px;
`;

const SoloSection = styled.section``;

const TeamSection = styled.section``;

const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;

  ${media.normal`
    flex-direction: row;
  `}
`;

const cardClassName = css`
  width: 100%;
  margin-bottom: 15px;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  ${media.normal`
    width: calc(33.33%);
    margin-right: 15px;
    margin-bottom: 0;
  `}
`;
