import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../route';
import AppRoute from '../AppRoute';

const PublicPrivate = ({ ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to={routes.private.url} />
  }

  return <AppRoute {...props} />
};

export default PublicPrivate;