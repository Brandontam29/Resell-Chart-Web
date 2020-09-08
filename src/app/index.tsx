/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { LoginPage } from './containers/LoginPage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

export const App = () => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="Resell Chart" defaultTitle="Resell Chart">
        <meta
          name="description"
          content="Website to advertise a streetwear tracking application"
        />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
