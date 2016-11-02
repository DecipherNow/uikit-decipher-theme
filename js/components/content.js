System.register(['react', './listItem'], function (_export) {
  // content.js

  'use strict';

  var React, ListItem, Content;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_react) {
      React = _react['default'];
    }, function (_listItem) {
      ListItem = _listItem['default'];
    }],
    execute: function () {
      Content = (function (_React$Component) {
        _inherits(Content, _React$Component);

        function Content(props) {
          _classCallCheck(this, Content);

          _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this, props);
        }

        _createClass(Content, [{
          key: 'render',
          value: function render() {
            var deps = {
              React: { description: 'a javascript library for building user interfaces' }
            };

            deps.SASS = { description: 'Sass CSS preprocessor' };

            deps.MaterialUI = { description: 'A Set of React Components that Implement Google\'s Material Design' };

            deps.Redux = { description: 'a predictable state container for JavaScript apps' };

            return React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                  'h1',
                  null,
                  'Corius - UI application scaffold.'
                ),
                React.createElement(
                  'h4',
                  null,
                  'Out of the box you get the following dependencies.'
                ),
                React.createElement(
                  'ul',
                  null,
                  React.createElement(ListItem, { name: 'JSPM', description: 'package management and module loading for the browser' }),
                  React.createElement(ListItem, { name: 'ES6', description: 'ECMAScript6 features exposed via the Babel transpiler' }),
                  React.createElement(ListItem, { name: 'Fetch', description: 'easier way to make web requests - a polyfill written as closely as possible to the standard Fetch specification' }),
                  React.createElement(ListItem, { name: 'Normalize', description: 'makes browsers render all elements more consistently and in line with modern standards' })
                ),
                (function () {
                  if (!Object.keys(deps).length) {
                    return;
                  } else {
                    return React.createElement(
                      'div',
                      { className: 'user-dependencies' },
                      React.createElement(
                        'h4',
                        null,
                        'Your added dependencies.'
                      ),
                      React.createElement(
                        'ul',
                        { className: 'deps' },
                        Object.keys(deps).map(function (depName, i) {
                          return(
                            // Note that when adding "dynamic children" to the component we need to specify unique "key" attribute
                            // values: https://facebook.github.io/react/docs/multiple-components.html#dynamic-children.
                            React.createElement(ListItem, { key: i, name: depName, description: deps[depName].description })
                          );
                        })
                      )
                    );
                  }
                })()
              )
            );
          }
        }]);

        return Content;
      })(React.Component);

      _export('default', Content);
    }
  };
});