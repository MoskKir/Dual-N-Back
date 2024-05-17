import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  RouteProvider,
  RouteLayout,
} from './hooks';

import { withStore } from './hocs/store';

import routes from './routes';


function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <RouteProvider>
            <Switch>
              {Object.entries(routes).map(([path, { Layout, Page }]) => (
                <Route key={path} path={path}>
                  <RouteLayout>
                    <Layout>
                      <Page />
                    </Layout>
                  </RouteLayout>
                </Route>
              ))}
            </Switch>
          </RouteProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default withStore(App);
