import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { PricingPage } from './containers/PricingPage/Loadable';
import { FaqPage } from './containers/FaqPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

import Layout from './components/main/Layout';

export const App = () => {
  const pageWrapper = (component: React.FC) => {
    const Component = component;
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Helmet titleTemplate="Resell Chart" defaultTitle="Resell Chart">
        <meta
          name="description"
          content="Website to advertise a streetwear tracking application"
        />
      </Helmet>
      <Switch>
        <Route exact path="/pricing" render={() => pageWrapper(PricingPage)} />
        <Route exact path="/faq" render={() => pageWrapper(FaqPage)} />
        <Route exact path="/" render={() => pageWrapper(HomePage)} />
        <Route path="*" render={() => pageWrapper(NotFoundPage)} />
      </Switch>
    </BrowserRouter>
  );
};
