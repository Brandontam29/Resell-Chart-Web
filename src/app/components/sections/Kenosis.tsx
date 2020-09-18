import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { line_height_text } from '../../../styles/commons/variables';
import { links } from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';

const Kenosis: React.FC = () => {
  const questions = [
    {
      question: 'Abigail',
      traits: 'Witty, Artistic, Quirky',
    },
    {
      question: 'Amelia',
      traits: 'Radiant, Thoughtful, Reliable, Mediator',
    },
    {
      question: 'Annika',
      traits: 'Creative, Joyful, Humorous, Hardworking',
    },
    {
      question: 'Celia',
      traits: 'Responsible, Attentive, Insightful',
    },
    {
      question: 'Dalia',
      traits: 'Funny, Sportive, Cooperative',
    },
    {
      question: 'David',
      traits: 'Loyal, Independent, Strong, Observant',
    },
    {
      question: 'Enoch',
      traits: 'Friendly, Punctual, Passionate, Sportive',
    },
    {
      question: 'Issac',
      traits: 'Respectful, Intelligent, Devoted',
    },
    {
      question: 'Yana',
      traits:
        "I didn't have the oppotunity to know you better but I am sure that you are Interesting.",
    },
    {
      question: 'Yasmina',
      traits: 'Intelligent, Self-reliant, Social consciousness',
    },
    {
      question: 'Cherry',
      traits: 'Reasonable, Caring, Easy going, Good listener',
    },
  ];
  return (
    <Container>
      <Heading>
        <h2>Kenosis</h2>
        <p></p>
      </Heading>
      <QuestionsContainer>
        {questions.map(card => (
          <Question key={card.question + card.traits}>
            <Text>
              <h4>{card.question}</h4>
              <p>{card.traits}</p>
            </Text>
          </Question>
        ))}
      </QuestionsContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  h2 {
    margin-bottom
    text-align: center;
  }
`;

const Heading = styled.header`
  width: 100%;
  text-align: center;

  ${links}
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  ${media.normal`
    flex-direction: row;
  `}
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  width: 100%;
  max-width: 480px;
  height: auto;

  margin: 0 auto 20px;
  padding: 15px 20px;

  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 20px;

  :last-child {
    margin-bottom: 0;
  }

  ${media.normal`
    width: 50%;
    max-width: calc( 50% - 30px);

    margin: 0;
    margin-bottom: 30px;

    :last-child {
      margin-bottom: 30px; 
    }

    :nth-child(2n - 1) {
      margin-right: 30px;
    }

    :nth-last-of-type(-n+1) {
      margin-bottom: 0;
    }
  `}
`;

const Text = styled.div`
  h4 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: ${line_height_text};
  }
`;

export default Kenosis;
