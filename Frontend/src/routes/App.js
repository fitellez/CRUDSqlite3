/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Menu from '../containers/Home/Menu';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Menu} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
