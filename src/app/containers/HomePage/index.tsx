import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/main/Layout';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="Resell Chart Web"
          content="Website to advertise a streetwear tracking application"
        />
      </Helmet>
      <Layout></Layout>
    </>
  );
}
