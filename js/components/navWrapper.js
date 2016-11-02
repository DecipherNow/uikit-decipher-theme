System.register(['react', 'immutable'], function (_export) {
  /**
   * navWrapper.js
   *
   * A high order component for app navigation.
   * 
   */

  /**
   * @param  {ReactClass} ComposedComponent [React component]
   * @return {ReactClass}
   */
  'use strict';

  var React, Map, NavWrapper;
  return {
    setters: [function (_react) {
      React = _react['default'];
    }, function (_immutable) {
      Map = _immutable.Map;
    }],
    execute: function () {
      NavWrapper = function NavWrapper(ComposedComponent) {

        return React.createClass({

          getInitialState: function getInitialState() {
            return {
              user: new Map()
            };
          },

          componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if (nextProps['user']) {
              this.setState({
                user: nextProps.user
              });
            }
          },

          _hasUserData: function _hasUserData() {
            return this.state.user.getIn(['user', 'userData']);
          },

          _hasMessages: function _hasMessages() {
            return this.state.user.getIn(['user', 'messages']);
          },

          _getUserDisplayName: function _getUserDisplayName() {
            return '' + this.state.user.getIn(['user', 'userData', 'displayName']);
          },

          render: function render() {
            var _this = this;

            return React.createElement(ComposedComponent, {
              getUserDisplayName: function () {
                return _this._getUserDisplayName();
              },
              hasMessages: function () {
                return _this._hasMessages();
              },
              hasUserData: function () {
                return _this._hasUserData();
              },
              user: this.state.user
            });
          }

        });
      };

      _export('NavWrapper', NavWrapper);
    }
  };
});