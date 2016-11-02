System.register(['react', 'react-router', 'material-ui', 'material-ui/lib/menus/icon-menu', 'material-ui/lib/menus/menu-item', 'material-ui/lib/svg-icons/navigation/expand-more', 'material-ui/lib/toolbar/toolbar', 'material-ui/lib/toolbar/toolbar-group', './navWrapper'], function (_export) {
  // nav.js

  'use strict';

  var React, Link, IconButton, IconMenu, MenuItem, ExpandMoreIcon, Toolbar, ToolbarGroup, NavWrapper, Nav;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_react) {
      React = _react['default'];
    }, function (_reactRouter) {
      Link = _reactRouter.Link;
    }, function (_materialUi) {
      IconButton = _materialUi.IconButton;
    }, function (_materialUiLibMenusIconMenu) {
      IconMenu = _materialUiLibMenusIconMenu['default'];
    }, function (_materialUiLibMenusMenuItem) {
      MenuItem = _materialUiLibMenusMenuItem['default'];
    }, function (_materialUiLibSvgIconsNavigationExpandMore) {
      ExpandMoreIcon = _materialUiLibSvgIconsNavigationExpandMore['default'];
    }, function (_materialUiLibToolbarToolbar) {
      Toolbar = _materialUiLibToolbarToolbar['default'];
    }, function (_materialUiLibToolbarToolbarGroup) {
      ToolbarGroup = _materialUiLibToolbarToolbarGroup['default'];
    }, function (_navWrapper) {
      NavWrapper = _navWrapper.NavWrapper;
    }],
    execute: function () {
      Nav = (function (_React$Component) {
        _inherits(Nav, _React$Component);

        function Nav(props) {
          _classCallCheck(this, Nav);

          _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, props);
        }

        _createClass(Nav, [{
          key: '_getMessages',
          value: function _getMessages() {
            return this.props.user.getIn(['user', 'messages']).map(function (message, index) {
              return React.createElement(MenuItem, {
                key: index,
                primaryText: message.get('message')
              });
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(
              Toolbar,
              {
                className: 'corius-nav',
                style: {
                  background: '#333',
                  padding: '0'
                }
              },
              React.createElement(
                Link,
                {
                  to: 'home',
                  title: 'Home' },
                React.createElement(
                  'h1',
                  null,
                  'Corius'
                )
              ),
              React.createElement(
                Link,
                {
                  to: 'about',
                  title: 'About',
                  className: 'nav-link'
                },
                'About'
              ),
              React.createElement(
                ToolbarGroup,
                { float: 'right' },
                this.props.hasUserData() && React.createElement(
                  IconMenu,
                  {
                    iconButtonElement: React.createElement(
                      IconButton,
                      { iconStyle: { fill: '#fff' } },
                      React.createElement(ExpandMoreIcon, null)
                    )
                  },
                  React.createElement(
                    'div',
                    { className: 'menu-title' },
                    this.props.getUserDisplayName()
                  ),
                  React.createElement(MenuItem, { primaryText: 'Edit Profile' })
                ),
                this.props.hasMessages() && React.createElement(
                  IconMenu,
                  {
                    iconButtonElement: React.createElement(
                      IconButton,
                      { iconStyle: { fill: '#fff' } },
                      React.createElement(ExpandMoreIcon, null)
                    )
                  },
                  React.createElement(
                    'div',
                    { className: 'menu-title' },
                    'Messages'
                  ),
                  React.createElement(
                    'div',
                    { className: 'messages' },
                    this._getMessages()
                  )
                )
              )
            );
          }
        }]);

        return Nav;
      })(React.Component);

      Nav.propTypes = {
        getUserDisplayName: React.PropTypes.func,
        hasMessages: React.PropTypes.func,
        hasUserData: React.PropTypes.func,
        user: React.PropTypes.object
      };

      Nav.defaultProps = {
        user: {}
      };

      _export('default', NavWrapper(Nav));
    }
  };
});