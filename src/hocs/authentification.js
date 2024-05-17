import React from 'react';
import { isAuthenticated } from 'services/authentication';
import {
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import config from 'config';

export default Component => props => {
  const { paths } = config.auth;
  const { path } = useRouteMatch();
  const history = useHistory();

  if (paths.notAuthenticated.includes(path)) {
    if (isAuthenticated()) {
      history.push(paths.authenticated);
      return <></>;
    }
  } else if (!isAuthenticated()) {
    history.push(paths.login);
    return <></>;
  }

  return <Component {...props} />;
};
