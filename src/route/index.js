import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '@/views/Login';

const routes = (
  <Switch>
    <Route path="/login" component={ Login }/>
  </Switch>
);

export default routes