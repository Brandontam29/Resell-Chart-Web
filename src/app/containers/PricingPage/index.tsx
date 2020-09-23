import React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

export const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <P></P>
    </>
  );
};

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: black;
  margin: 0.625rem 0 1.5rem 0;
`;
