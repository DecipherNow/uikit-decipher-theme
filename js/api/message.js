System.register([], function (_export) {
  // message.js

  /**
   * Uesd to model generic messages that may be displayed, for eample, in
   * a drop-down menu shown as part of the application nav bar. Using a standard
   * model for messages (vs ad hoc JavaScript objects) helps ensure that 
   * the objects always have a guaranteed set of properties.
   */
  "use strict";

  var Message;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Message = (function () {

        /**
         * @param  {string} something that helps identify the message (e.g., a short-hand code or key)
         * @param  {string} something that helps categorize the message (e.g., warning vs info)
         * @param  {string} user-friendly message
         * @param  {object} any other data
         * @return {Message}
         */

        function Message(id, type, message) {
          var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

          _classCallCheck(this, Message);

          this.id = id;
          this.type = type;
          this.message = message;
          this.data = data;
        }

        _createClass(Message, [{
          key: "getData",
          value: function getData() {
            return {
              id: this.id,
              type: this.type,
              message: this.message,
              data: this.data
            };
          }
        }]);

        return Message;
      })();

      _export("default", Message);
    }
  };
});