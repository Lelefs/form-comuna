import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Finalizacao from '../pages/Finalizacao';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/finalizacao" component={Finalizacao} />
    </Switch>
  );
};
