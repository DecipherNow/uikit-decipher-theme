System.register(['react', 'react-redux', 'react-router-redux', '../reducers/user'], function (_export) {
  // login.js

  'use strict';

  var React, connect, routeActions, fetchUserIfNeeded, Login, LoginContainer;

  function mapStateToProps(state) {
    var user = state.user;
    var dispatch = state.dispatch;

    return {
      user: user,
      dispatch: dispatch
    };
  }

  return {
    setters: [function (_react) {
      React = _react['default'];
    }, function (_reactRedux) {
      connect = _reactRedux.connect;
    }, function (_reactRouterRedux) {
      routeActions = _reactRouterRedux.routeActions;
    }, function (_reducersUser) {
      fetchUserIfNeeded = _reducersUser.fetchUserIfNeeded;
    }],
    execute: function () {
      Login = React.createClass({
        displayName: 'Login',

        componentWillMount: function componentWillMount() {
          this.setState({ message: 'Logging in...' });
          this.props.dispatch(fetchUserIfNeeded);
        },

        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
          if (!nextProps.user.get('user')) {
            return;
          }
          this._setStateOnAuth(nextProps);
        },

        _setStateOnAuth: function _setStateOnAuth(props) {
          var _this = this;

          var location = props.location;
          var dispatch = props.dispatch;
          var user = props.user;

          if (user.getIn(['user', 'userData'])) {
            // if the user entered the app from a specific route then redirect them to that route
            if (location.state && location.state.nextPathname) {
              dispatch(routeActions.replace(location.state.nextPathname));
              // otherwise if the user entered from the root then redirect them to home
            } else {
                dispatch(routeActions.replace('home'));
              }
          } else {
            if (user.getIn(['user', 'errors'])) {
              (function () {
                var errMsg = '';
                var size = user.getIn(['user', 'errors']).size;

                user.getIn(['user', 'errors']).map(function (error, i) {
                  errMsg += '' + error.get('message');
                  if (size > i) {
                    errMsg += ' ';
                  }
                });

                _this.setState({ message: '' + errMsg });
              })();
            }
            // if the user hit /login directly then re-route them to /home which will run them
            // through the login process
            if (!location.state) {
              dispatch(routeActions.replace('home'));
            }
          }
        },

        render: function render() {
          return React.createElement(
            'div',
            { className: 'login' },
            React.createElement(
              'div',
              { className: 'message' },
              this.state.message
            )
          );
        }

      });

      Login.propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        user: React.PropTypes.object
      };LoginContainer = connect(mapStateToProps)(Login);

      _export('default', LoginContainer);
    }
  };
});