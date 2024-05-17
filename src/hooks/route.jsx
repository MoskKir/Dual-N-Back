import React, { createContext, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';

class Route {
  constructor (history) {
    this.history = history;
    this.parse();
  }

  parse () {
    this.pathname = this.history.location.pathname;
    this.search = this.history.location.search
      ? qs.parse(this.history.location.search.slice(1))
      : {};
    this.hash = this.history.location.hash;
    return this;
  };

  push (params) {
    this.history.push(this.toString(params));
  }

  replace (params) {
    this.history.replace(this.toString(params));
  }

  toSearch (search) {
    return Object.keys(search).length
      ? `?${qs.stringify(search)}`
      : '';
  }

  toString (params) {
    if (typeof params === 'string') {
      return params;
    }

    if (typeof params !== 'object') {
      return [
        this.pathname,
        this.toSearch(this.search),
        this.hash,
      ].join('');
    }

    return [
      params.pathname || this.pathname,
      ...(params.search
        ? [this.toSearch(params.search)]
        : !params.pathname
          ? [this.toSearch(this.search)]
          : []),
      ...(params.hash
        ? [params.hash]
        : !params.pathname
          ? [this.hash]
          : []),
    ].join('');
  }
}


const RouteContext = createContext(null);

export const RouteProvider = ({ children }) => {
  const history = useHistory();

  const route = useMemo(() => new Route(history), [
    history.location.pathname,
    history.location.search,
    history.location.hash,
  ]);

  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
};

export const RouteLayout = ({ children }) => {
  useRoute();
  return <>{children}</>;
};

export const useRoute = () => useContext(RouteContext);
