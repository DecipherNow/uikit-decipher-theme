System.register(['es6-shim', 'react', 'react-dom', './routes', 'react-router', 'react-redux', './store'], function (_export) {
  // app.js

  /*eslint-enable no-unused-vars*/
  'use strict';

  /*eslint-disable no-unused-vars*/
  var React, ReactDOM, routes, Router, Provider, store, history;
  return {
    setters: [function (_es6Shim) {}, function (_react) {
      React = _react['default'];
    }, function (_reactDom) {
      ReactDOM = _reactDom['default'];
    }, function (_routes) {
      routes = _routes['default'];
    }, function (_reactRouter) {
      Router = _reactRouter.Router;
    }, function (_reactRedux) {
      Provider = _reactRedux.Provider;
    }, function (_store) {
      store = _store.store;
      history = _store.history;
    }],
    execute: function () {

      ReactDOM.render(React.createElement(
        Provider,
        { store: store },
        React.createElement(Router, {
          history: history,
          routes: routes
        })
      ), document.getElementById('app'));
    }
  };
});