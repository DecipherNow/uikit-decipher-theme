System.register(['../api/api', 'immutable'], function (_export) {
  // user.js

  'use strict';

  var getUser, Map, REQUEST_USER, RECEIVE_USER, RECEIVE_USER_FAILURE;

  _export('fetchUserIfNeeded', fetchUserIfNeeded);

  _export('default', reducer);

  function requestUser() {
    return { type: REQUEST_USER };
  }

  function receiveUser(json) {
    return {
      type: RECEIVE_USER,
      user: json['user'] ? json.user : {}
    };
  }

  function receiveUserFailure(errors) {
    return {
      type: RECEIVE_USER_FAILURE,
      user: {
        errors: errors['json'] ? errors.json.errors : {
          error: {
            message: 'Error retrieving user credentials.'
          }
        }
      }
    };
  }

  function fetchUser() {
    return function (dispatch) {
      dispatch(requestUser());
      return getUser().then(function (json) {
        return dispatch(receiveUser(json));
      })['catch'](function (errors) {
        return dispatch(receiveUserFailure(errors));
      });
    };
  }

  function shouldFetchUser(state) {
    if (!state.user.get('user')) {
      return true;
    }
    if (state.user.get('isFetchingUser')) {
      return false;
    }
    return false;
  }

  function fetchUserIfNeeded(dispatch, getState) {
    if (shouldFetchUser(getState())) {
      dispatch(fetchUser());
    }
  }

  function reducer(state, action) {
    if (state === undefined) state = Map({});

    switch (action.type) {
      case REQUEST_USER:
        return state.merge({
          isFetchingUser: true
        });
      case RECEIVE_USER:
        return state.merge({
          isFetchingUser: false,
          user: action.user
        });
      case RECEIVE_USER_FAILURE:
        return state.merge({
          isFetchingUser: false,
          user: action.user
        });
      default:
        return state;
    }
  }

  return {
    setters: [function (_apiApi) {
      getUser = _apiApi.getUser;
    }, function (_immutable) {
      Map = _immutable.Map;
    }],
    execute: function () {
      REQUEST_USER = 'REQUEST_USER';

      _export('REQUEST_USER', REQUEST_USER);

      RECEIVE_USER = 'RECEIVE_USER';

      _export('RECEIVE_USER', RECEIVE_USER);

      RECEIVE_USER_FAILURE = 'RECEIVE_USER_FAILURE';

      _export('RECEIVE_USER_FAILURE', RECEIVE_USER_FAILURE);
    }
  };
});