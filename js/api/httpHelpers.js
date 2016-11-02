System.register([], function (_export) {
  // httpHelpers.js

  'use strict';

  var checkStatus, fetchTimeout;
  return {
    setters: [],
    execute: function () {
      checkStatus = function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else if (response['status'] && response['status'] === 408) {
          throw new Error('Communication with the user service has timed out.');
        } else {
          var _ret = (function () {
            var error = new Error(response.statusText);
            error.response = response;
            var json = response.json();
            return {
              v: json.then(function (errJson) {
                error.json = errJson;
                throw error;
              })
            };
          })();

          if (typeof _ret === 'object') return _ret.v;
        }
      };

      fetchTimeout = function fetchTimeout(ms, promise) {
        // leverage ES6 Promise object
        return new Promise(function (resolve, reject) {
          var timeout = setTimeout(function () {
            // HTTP 1.1 408 Request Timeout
            reject({ status: 408 });
            clearTimeout(timeout);
          }, ms);
          return promise.then(resolve, reject);
        });
      };

      _export('checkStatus', checkStatus);

      _export('fetchTimeout', fetchTimeout);
    }
  };
});