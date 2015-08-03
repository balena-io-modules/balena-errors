
/*
The MIT License

Copyright (c) 2015 Resin.io, Inc. https://resin.io.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */

/**
 * @module errors
 */
var ResinApplicationNotFound, ResinDeviceNotFound, ResinInvalidDeviceType, ResinKeyNotFound, ResinMalformedToken, ResinNotLoggedIn, ResinRequestError, TypedError,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TypedError = require('typed-error');


/**
 *	@summary Resin invalid device type
 * @class
 * @public
 *
 * @param {String} type - device type
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinInvalidDeviceType('raspberry-pi')
 */

exports.ResinInvalidDeviceType = ResinInvalidDeviceType = (function(_super) {
  __extends(ResinInvalidDeviceType, _super);

  function ResinInvalidDeviceType(type) {
    this.type = type;
    ResinInvalidDeviceType.__super__.constructor.call(this, "Invalid device type: " + this.type);
  }

  ResinInvalidDeviceType.prototype.code = 'ResinInvalidDeviceType';

  ResinInvalidDeviceType.prototype.exitCode = 1;

  return ResinInvalidDeviceType;

})(TypedError);


/**
 *	@summary Resin malformed token
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinMalformedToken('1234')
 */

exports.ResinMalformedToken = ResinMalformedToken = (function(_super) {
  __extends(ResinMalformedToken, _super);

  function ResinMalformedToken(token) {
    this.token = token;
    ResinMalformedToken.__super__.constructor.call(this, "Malformed token: " + this.token);
  }

  ResinMalformedToken.prototype.code = 'ResinMalformedToken';

  ResinMalformedToken.prototype.exitCode = 1;

  return ResinMalformedToken;

})(TypedError);


/**
 *	@summary Resin application not found
 * @class
 * @public
 *
 * @param {(String|Number)} application - application name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinApplicationNotFound('MyApp')
 */

exports.ResinApplicationNotFound = ResinApplicationNotFound = (function(_super) {
  __extends(ResinApplicationNotFound, _super);

  function ResinApplicationNotFound(application) {
    this.application = application;
    ResinApplicationNotFound.__super__.constructor.call(this, "Application not found: " + this.application);
  }

  ResinApplicationNotFound.prototype.code = 'ResinApplicationNotFound';

  ResinApplicationNotFound.prototype.exitCode = 1;

  return ResinApplicationNotFound;

})(TypedError);


/**
 *	@summary Resin device not found
 * @class
 * @public
 *
 * @param {(String|Number)} device - device name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinDeviceNotFound('MyDevice')
 */

exports.ResinDeviceNotFound = ResinDeviceNotFound = (function(_super) {
  __extends(ResinDeviceNotFound, _super);

  function ResinDeviceNotFound(device) {
    this.device = device;
    ResinDeviceNotFound.__super__.constructor.call(this, "Device not found: " + this.device);
  }

  ResinDeviceNotFound.prototype.code = 'ResinDeviceNotFound';

  ResinDeviceNotFound.prototype.exitCode = 1;

  return ResinDeviceNotFound;

})(TypedError);


/**
 *	@summary Resin key not found
 * @class
 * @public
 *
 * @param {(String|Number)} key - key name, id or value
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinKeyNotFound('MyKey')
 */

exports.ResinKeyNotFound = ResinKeyNotFound = (function(_super) {
  __extends(ResinKeyNotFound, _super);

  function ResinKeyNotFound(key) {
    this.key = key;
    ResinKeyNotFound.__super__.constructor.call(this, "Key not found: " + this.key);
  }

  ResinKeyNotFound.prototype.code = 'ResinKeyNotFound';

  ResinKeyNotFound.prototype.exitCode = 1;

  return ResinKeyNotFound;

})(TypedError);


/**
 *	@summary Resin request error
 * @class
 * @public
 *
 * @param {String} body - response body
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinRequestError('Unauthorized')
 */

exports.ResinRequestError = ResinRequestError = (function(_super) {
  __extends(ResinRequestError, _super);

  function ResinRequestError(body) {
    this.body = body;
    ResinRequestError.__super__.constructor.call(this, "Request error: " + this.body);
  }

  ResinRequestError.prototype.code = 'ResinRequestError';

  ResinRequestError.prototype.exitCode = 1;

  return ResinRequestError;

})(TypedError);


/**
 *	@summary Resin not logged in
 * @class
 * @public
 *
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinNotLoggedIn()
 */

exports.ResinNotLoggedIn = ResinNotLoggedIn = (function(_super) {
  __extends(ResinNotLoggedIn, _super);

  function ResinNotLoggedIn() {
    ResinNotLoggedIn.__super__.constructor.call(this, 'You have to log in');
  }

  ResinNotLoggedIn.prototype.code = 'ResinNotLoggedIn';

  ResinNotLoggedIn.prototype.exitCode = 1;

  return ResinNotLoggedIn;

})(TypedError);
