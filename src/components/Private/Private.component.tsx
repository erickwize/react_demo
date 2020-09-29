import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IProps } from './Private.component.typed';
import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }: IProps) {
  const { authenticated } = useAuth();

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
