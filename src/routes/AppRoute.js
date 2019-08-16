import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AppRoute = ({ component: Component, auth, title, ...routeProps }) => (
  <React.Fragment>
    <Helmet title={title} />
    <Route
      exact
      render={(props) => (
        <Component
          title={title}
          auth={auth}
          {...props}
        />
      )}
      {...routeProps}
    />
  </React.Fragment>
);

export default AppRoute;