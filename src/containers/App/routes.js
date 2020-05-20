import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const routes = [
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/not-found",
    component: NotFoundPage
  }
];

export default function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} />
      )}
    />
  );
}