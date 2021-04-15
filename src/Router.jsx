/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import Page from './Page';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/:page" component={Page} />
    </Switch>
  );
}
