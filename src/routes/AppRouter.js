import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link, NavLink } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import AppDashboardPage from '../components/AppDashboardPage';
import NotFoundPage from '../components/NotFoundPage';

import '../assets/styles/app.css';

const AppRouter = () => (
  <BrowserRouter>
    <Route component={AppLayout}> 
      <Switch>
          <Route path="/" component={AppDashboardPage} exact={true} />
          <Route component={NotFoundPage} />
      </Switch>
    </Route>      
  </BrowserRouter>
);

export default AppRouter;
