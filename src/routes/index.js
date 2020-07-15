import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
};
