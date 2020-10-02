import React from 'react';
import styled from 'styled-components/macro';
// import { css } from 'styled-components';

import { light_cinder, light_grey } from '../../../styles/commons/variables';
import {
  card_shadow,
  // font_big,
  font_biggest,
  font_normal,
} from '../../../styles/commons/placeholders';
import {} from '../../../styles/commons/media';

import Check from '../icons/Check';

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

interface Props {
  cards: CardProp[];
  condition: Boolean;
  className?: any;
}

const PricingCards: React.FC<Props> = ({ cards, condition, className }) => {
  return (
    <>
      {cards.map((card: CardProp) => {
        const cost = card.pricing.cost;
        return (
          <Card
            key={card.heading + card.description + cost}
            className={className}
          >
            <Heading>
              <h3>{card.heading}</h3>
              <p>{card.description}</p>
            </Heading>
            <Pricing>
              {condition ? (
                <>
                  <span>{typeof cost === 'number' ? `${cost}$` : cost}</span>
                  <span>{card.pricing.description.monthly}</span>
                </>
              ) : (
                <>
                  <span>
                    {typeof cost === 'number'
                      ? `${Math.floor(cost * 10)}$`
                      : cost}
                  </span>
                  <span>{card.pricing.description.yearly}</span>
                </>
              )}
            </Pricing>
            <Features>
              {card.features.map(feature => (
                <li key={feature}>
                  <Check /> {feature}
                </li>
              ))}
            </Features>
          </Card>
        );
      })}
    </>
  );
};

const Card = styled.article<{ className: any }>`
  ${({ className }) => className};

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 15px;

  border-radius: 20px;
  background-color: ${light_cinder};

  ${card_shadow}
`;
const Heading = styled.div`
  h3 {
    margin-bottom: 0.35em;
  }
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 2px ${light_grey} solid;
`;

const Pricing = styled.div`
  padding-left: 10px;
  margin-bottom: 15px;

  span {
    &:first-child {
      ${font_biggest}
      margin-right: 10px;
    }
    &:last-child {
      color: ${light_grey};
      ${font_normal};
    }
  }
`;

const Features = styled.ul``;

export default PricingCards;
