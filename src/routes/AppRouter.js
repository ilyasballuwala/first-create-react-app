import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link, NavLink } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

import AppDashboardPage from '../components/Pages/AppDashboardPage';
import AppDealsPage from '../components/Pages/AppDealsPage';
import NotFoundPage from '../components/NotFoundPage';

import '../assets/styles/app.css';

const AppRouter = () => (
  <BrowserRouter>
    <AppLayout> 
      <Switch>
          <Route path="/" component={AppDashboardPage} exact={true} />
          <Route path="/deals" component={AppDealsPage} exact={true} />
          <Route component={NotFoundPage} />
      </Switch>
    </AppLayout>      
  </BrowserRouter>
);

export default AppRouter;
