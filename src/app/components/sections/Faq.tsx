import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import {
  deep_sky_blue,
  line_height_text,
} from '../../../styles/commons/variables';
import { image, font_large } from '../../../styles/commons/placeholders';
import { media } from '../../../styles/commons/media';

export const Faq: React.FC = () => {
  const questions = [
    {
      question: 'How much does it cost?',
      answer:
        'Resell Chart retails for $3 CAD/month. During that month, users get free updates and support through our discord.',
    },
    {
      question: 'Are group-buys offered?',
      answer:
        'Yes we offer groupbuys. Please contact us if you are an owner, admin or authorized personnel for running groupbuys.',
    },
    {
      question: 'Can I share account with a friend',
      answer:
        'Each account has a maximum of 1 active sessions. More active session purchases will be available later during development.',
    },
    {
      question: 'Is there a Website version of the application?',
      answer:
        "We currently do not have a web version. We're slowly developping towards a website.",
    },
    {
      question: 'Will there be restock?',
      answer:
        'Resell Chart typically restocks once every 1-2 weeks. Anytime we have a planned restock, we will tweeet it out and annonce it in our discord.',
    },
    {
      question: 'How can I report a bug?',
      answer:
        "User's who are experiencing bugs or glitches can report them on our discord.",
    },
  ];
  return (
    <Container>
      <Heading>
        <h2>F.A.Q.</h2>
      </Heading>
      <QuestionsContainer>
        {questions.map(card => (
          <Question key={card.question + card.answer}>
            <Text>
              <h4>{card.question}</h4>
              <p>{card.answer}</p>
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

const Heading = styled.div`
  width: 100%;
  text-align: center;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: center;

  ${media.small`
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

  ${media.small`
    width: 50%;

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
  h4 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: ${line_height_text};
  }
`;

export default Faq;
