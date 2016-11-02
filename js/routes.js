System.register(['react', 'react-router', 'react-router-redux', './store', './pages/main', './pages/about', './pages/home', './pages/login', './appConfig'], function (_export) {
  // routes.js

  /*eslint-disable no-unused-vars*/
  'use strict';

  /*eslint-enable no-unused-vars*/
  var React, Route, IndexRoute, routeActions, store, Main, About, Home, Login, appConfig, routes;

  function requireAuth(nextState, replace) {
    if (!appConfig.requireAuthentication) {
      return;
    }
    if (nextState.location.pathname !== 'login') {
      store.dispatch(routeActions.push('login'));

      var pathName = nextState.location.pathname;

      if (nextState.location.basename === '') {
        pathName = '/';
      }

      replace({
        pathname: '/login',
        state: { nextPathname: pathName }
      });
    }
  }

  return {
    setters: [function (_react) {
      React = _react['default'];
    }, function (_reactRouter) {
      Route = _reactRouter.Route;
      IndexRoute = _reactRouter.IndexRoute;
    }, function (_reactRouterRedux) {
      routeActions = _reactRouterRedux.routeActions;
    }, function (_store) {
      store = _store.store;
    }, function (_pagesMain) {
      Main = _pagesMain.MainContainer;
    }, function (_pagesAbout) {
      About = _pagesAbout['default'];
    }, function (_pagesHome) {
      Home = _pagesHome['default'];
    }, function (_pagesLogin) {
      Login = _pagesLogin['default'];
    }, function (_appConfig) {
      appConfig = _appConfig['default'];
    }],
    execute: function () {
      routes = React.createElement(
        Route,
        {
          component: Main,
          onEnter: requireAuth,
          path: '/'
        },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(Route, {
          component: Login,
          path: 'login'
        }),
        React.createElement(Route, {
          component: Home,
          path: 'home'
        }),
        React.createElement(Route, {
          component: About,
          path: 'about'
        })
      );

      _export('default', routes);
    }
  };
});