/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './Page';

export default function Routes() {
  return (
    <Switch>
      <Route path="/:page" component={Page} />
    </Switch>
  );
}
