import React from 'react';
import styled from 'styled-components/macro';

import { line_height_text } from '../../../../styles/commons/variables';
import { image, card_shadow } from '../../../../styles/commons/placeholders';
import { media } from '../../../../styles/commons/media';

import calculator from '../../../../images/calculator.png';
import sort from '../../../../images/sort.png';
import phone from '../../../../images/phone.png';
import increase from '../../../../images/increase.png';

interface Props {
  forwardRef?: any;
  className?: any;
}

export const Features: React.FC<Props> = ({ forwardRef, className }) => {
  const features = [
    {
      image: increase,
      heading: 'Analytics',
      description: 'See all your sales from a click of a button',
    },
    {
      image: calculator,
      heading: 'Profit Caluculator',
      description:
        'Automatically calculates your profites with visual graph displays',
    },
    {
      image: phone,
      heading: 'Mobile App',
      description:
        'Now available on all mobile devices (IOS, Android and HuaWei)',
    },
    {
      image: sort,
      heading: 'Sort & FIlter',
      description: 'Sorting and filtering system by using keywords',
    },
  ];

  return (
    <Container ref={forwardRef} className={className}>
      <Heading>
        <h2>Features</h2>
        <p>Track your progression</p>
      </Heading>
      <FeaturesContainer>
        {features.map(feature => (
          <Feature key={feature.heading}>
            <img src={feature.image} alt={`${feature.heading} Logo`} />
            <Text>
              <h4>{feature.heading}</h4>
              <p>{feature.description}</p>
            </Text>
          </Feature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
`;

const Heading = styled.header`
  width: 100%;
  text-align: center;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: center;

  ${media.small`
    flex-direction: row;
  `}
`;

const Feature = styled.div`
  ${card_shadow}

  display: flex;
  flex-direction: row;
  flex-grow: 1;

  width: 100%;
  max-width: 360px;
  height: auto;

  margin: 0 auto 20px;
  padding: 15px;

  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 20px;

  :last-child {
    margin-bottom: 0;
  }

  img {
    ${image}
    max-width: 60px;
    margin-bottom: auto;
  }

  ${media.small`
    width: calc(50% - 30px);
    margin: 0;
    margin-bottom: 30px;

    :last-child {
      margin-bottom: 30px; 
    }

    :nth-child(2n - 1) {
      margin-right: 30px;
    }

    :nth-last-of-type(-n+2) {
      margin-bottom: 0;
    }
  `}
`;

const Text = styled.div`
  padding-left: 10px;

  h4 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: ${line_height_text};
  }
`;

// :nth-child(n + 1) {
//   margin-right: 20px;
// }

export default Features;
