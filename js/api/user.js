System.register(['./message'], function (_export) {
  // user.js

  /**
   * User model. Should be used to wrap the user data returned from server.
   * The rest of the JavaScript application should normally use this object
   * instead of interacting directly with user JSON returned by the server;
   * if the server changes its JSON structure for some reason, it would then
   * only affect the code in this class.
   */
  'use strict';

  var Message, User;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_message) {
      Message = _message['default'];
    }],
    execute: function () {
      User = (function () {

        /**
         * @param  {[Object]} JSON object containing user data as returned by server API.
         * @return {[User]}
         */

        function User(userData) {
          _classCallCheck(this, User);

          this.userData = userData;
          this.messages = [];
          this.userData.displayName = this.getDisplayName();
        }

        _createClass(User, [{
          key: 'getDisplayName',
          value: function getDisplayName() {
            var firstName = this.userData.firstName ? this.userData.firstName : '';
            var lastName = this.userData.lastName ? this.userData.lastName : '';
            return firstName + ' ' + lastName;
          }
        }, {
          key: 'getData',
          value: function getData() {
            return {
              userData: this.userData,
              messages: this.messages
            };
          }
        }, {
          key: 'setMessages',
          value: function setMessages(messages) {
            if (messages) {
              return this.messages = Object.keys(messages).map(function (key) {
                var message = new Message(key, messages[key].type, messages[key].message);
                return message.getData();
              });
            }
          }
        }]);

        return User;
      })();

      _export('default', User);
    }
  };
});