System.register(['redux', 'react-router-redux', './user'], function (_export) {
  // rootReducer.js

  'use strict';

  var combineReducers, routeReducer, user, rootReducer;
  return {
    setters: [function (_redux) {
      combineReducers = _redux.combineReducers;
    }, function (_reactRouterRedux) {
      routeReducer = _reactRouterRedux.routeReducer;
    }, function (_user) {
      user = _user['default'];
    }],
    execute: function () {
      rootReducer = combineReducers({
        user: user,
        routing: routeReducer
      });

      _export('default', rootReducer);
    }
  };
});