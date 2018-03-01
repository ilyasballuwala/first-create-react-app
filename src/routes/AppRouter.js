import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

import AppDashboardPage from '../components/Pages/AppDashboardPage';
import AppDealsPage from '../components/Pages/AppDealsPage';
import PaymentHistoryPage from '../components/Pages/PaymentHistoryPage';
import TotalEarningsPage from '../components/Pages/TotalEarningsPage';
import CustomerListingPage from '../components/Pages/CustomerListingPage';
import NotificationManagementPage from '../components/Pages/NotificationManagementPage';
import CashbackPage from '../components/Pages/CashbackPage';
import NotFoundPage from '../components/NotFoundPage';

import UserProfilePage from '../components/Pages/user/UserProfilePage';
import UserSettingsPage from '../components/Pages/user/UserSettingsPage';

import '../assets/styles/app.css';

const AppRouter = () => (
  <BrowserRouter>
    <AppLayout> 
      <Switch>
          <Route path="/" component={AppDashboardPage} exact={true} />
          <Route path="/deals" component={AppDealsPage} exact={true} />
          <Route path="/purchase-history" component={PaymentHistoryPage} exact={true} />
          <Route path="/earnings" component={TotalEarningsPage} exact={true} />
          <Route path="/customers" component={CustomerListingPage} exact={true} />
          <Route path="/notifications" component={NotificationManagementPage} exact={true} />
          <Route path="/cashback" component={CashbackPage} exact={true} />

          <Route path="/user-profile" component={UserProfilePage} exact={true} />
          <Route path="/user-settings" component={UserSettingsPage} exact={true} />

          <Route component={NotFoundPage} />
      </Switch>
    </AppLayout>      
  </BrowserRouter>
);

export default AppRouter;
