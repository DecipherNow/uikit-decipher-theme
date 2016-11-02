System.register(['whatwg-fetch', './user', './httpHelpers', '../appConfig'], function (_export) {
  // api.js

  /**
   * Async function to retrieve a user from a user service.
   */
  'use strict';

  var User, checkStatus, fetchTimeout, config, getUser;
  return {
    setters: [function (_whatwgFetch) {}, function (_user) {
      User = _user['default'];
    }, function (_httpHelpers) {
      checkStatus = _httpHelpers.checkStatus;
      fetchTimeout = _httpHelpers.fetchTimeout;
    }, function (_appConfig) {
      config = _appConfig['default'];
    }],
    execute: function () {
      getUser = function getUser() {
        var url = config.userServiceEndpoint + '/user/me?autoRegister=true';

        /**
         * Use the new 'fetch()' function instead of the old XHR method. It's important
         * to set the credentials mode to 'include' to ensure that Firefox will use a
         * client certificate (if appropriate) when making secure, cross-origin requests.
         * Without this, Firefox confusingly reports CORS errors.
         *
         * Also note that with the chained calls on returned Promise objects we are 
         * deliberately NOT calling .catch()--this would prevent the getUser() caller
         * from being able to catch() errors.
         * 
         * @type {Promise}
         */
        return fetchTimeout('' + config.requestTimeout, fetch(url, { credentials: 'include' }))
        // When promise returned by fetchTimeout() is resolved (i.e., request
        // finishes) the response will be passed to checkStatus().
        .then(checkStatus)
        // Response returned by checkStatus() wil be passed to this arrow function.
        .then(function (response) {
          return response.json();
        })
        // response.json() returns a promise that will resolve once the JSON is parsed
        // (see https://developer.mozilla.org/en-US/docs/Web/API/Body/json). This json
        // will then be passed to the following arrow function.
        .then(function (json) {
          var results = {
            user: {},
            rawJsonResp: json
          };

          if (json.item['user']) {
            var user = new User(json.item.user);

            if (json.item['messages']) {
              user.setMessages(json.item.messages);
            }

            results.user = user.getData();
          }

          return Promise.resolve(results);
        });
      };

      _export('getUser', getUser);
    }
  };
});