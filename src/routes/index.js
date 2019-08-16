
import React from 'react';
import { Switch } from 'react-router-dom';
import map from 'lodash/map';
import { SnackbarProvider } from 'notistack';
import PublicRoute from './typeRoutes/PublicRoute';
import PrivateRoute from './typeRoutes/PrivateRoute';
import OtherRoute from './typeRoutes/OtherRoute';
import { privateRoute, publicRoute, otherRoute } from './route';
import withTheme from '../utils/Utils';

const App = () => (
  <SnackbarProvider hideIconVariant>
    <Switch>
      {renderPublicRoute()}
      {renderPrivateRoute()}
      {renderOtherRoute()}
    </Switch>
  </SnackbarProvider>
);

const renderPublicRoute = () => map(publicRoute, ({ url, title, component }) => (
  <PublicRoute
    key={url}
    exact
    path={url}
    component={component}
    title={title}
  />
));

const renderPrivateRoute = () => map(privateRoute, ({ url, title, component }) => (
  <PrivateRoute
    key={url}
    exact
    path={url}
    component={component}
    title={title}
  />
));

const renderOtherRoute = () => map(otherRoute, ({ url, title, component }) => (
  <OtherRoute
    key={url}
    path={url}
    component={component}
    title={title}
  />
));

export default withTheme(App)