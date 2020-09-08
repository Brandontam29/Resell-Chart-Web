import React from 'react';
import { Helmet } from 'react-helmet-async';

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="Resell Chart Web"
          content="Website to advertise a streetwear tracking application"
        />
      </Helmet>
      <span>LoginPage container</span>
    </>
  );
};
