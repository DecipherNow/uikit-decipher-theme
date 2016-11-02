System.register(['redux', 'react-router-redux', 'react-router', 'history', 'redux-logger', 'redux-thunk', './reducers/rootReducer'], function (_export) {
  // configureStore.js

  // global variable arriving from index.html
  'use strict';

  var createStore, applyMiddleware, syncHistory, useRouterHistory, createHistory, createLogger, thunk, rootReducer, base, BASE_URL, history, reduxRouterMiddleware, createStoreWithMiddleware, store;
  return {
    setters: [function (_redux) {
      createStore = _redux.createStore;
      applyMiddleware = _redux.applyMiddleware;
    }, function (_reactRouterRedux) {
      syncHistory = _reactRouterRedux.syncHistory;
    }, function (_reactRouter) {
      useRouterHistory = _reactRouter.useRouterHistory;
    }, function (_history) {
      createHistory = _history.createHistory;
    }, function (_reduxLogger) {
      createLogger = _reduxLogger['default'];
    }, function (_reduxThunk) {
      thunk = _reduxThunk['default'];
    }, function (_reducersRootReducer) {
      rootReducer = _reducersRootReducer['default'];
    }],
    execute: function () {
      base = document.getElementsByTagName('base')[0];
      BASE_URL = base.attributes[0].value;

      // manually create history using a custom basename configuration, this will ensure
      // that all routes will be run relative to the value of BASE_URL
      history = useRouterHistory(createHistory)({
        basename: BASE_URL
      });

      /**
      * History middleware allows action creators to call history methods.
      * The middleware will look for route actions created by push, replace, etc.
      * and apply them to the history.
      */
      reduxRouterMiddleware = syncHistory(history);
      createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware, createLogger())(createStore);
      store = createStoreWithMiddleware(rootReducer);

      _export('store', store);

      _export('history', history);
    }
  };
});