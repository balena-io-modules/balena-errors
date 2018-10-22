"use strict";
/*
Copyright 2016 Balena

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @module errors
 */
var typed_error_1 = require("typed-error");
var BalenaError = (function (_super) {
    tslib_1.__extends(BalenaError, _super);
    function BalenaError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BalenaError;
}(typed_error_1.TypedError));
exports.BalenaError = BalenaError;
BalenaError.prototype.code = 'BalenaError';
BalenaError.prototype.exitCode = 1;
/**
 * @summary Balena invalid device type
 * @class
 * @public
 *
 * @param {String} type - device type
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaInvalidDeviceType('raspberry-pi')
 */
var BalenaInvalidDeviceType = (function (_super) {
    tslib_1.__extends(BalenaInvalidDeviceType, _super);
    function BalenaInvalidDeviceType(type) {
        var _this = _super.call(this, "Invalid device type: " + type) || this;
        _this.type = type;
        return _this;
    }
    return BalenaInvalidDeviceType;
}(BalenaError));
exports.BalenaInvalidDeviceType = BalenaInvalidDeviceType;
BalenaInvalidDeviceType.prototype.code = 'BalenaInvalidDeviceType';
/**
 * @summary Balena discontinued device type
 * @class
 * @public
 *
 * @description
 * The device type that you specified is invalid because it is
 * discontinued, and this operation is no longer supported.
 *
 * @param {String} type - device type
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaDiscontinuedDeviceType('edge')
 */
var BalenaDiscontinuedDeviceType = (function (_super) {
    tslib_1.__extends(BalenaDiscontinuedDeviceType, _super);
    function BalenaDiscontinuedDeviceType(type) {
        var _this = _super.call(this, "Discontinued device type: " + type) || this;
        _this.type = type;
        return _this;
    }
    return BalenaDiscontinuedDeviceType;
}(BalenaInvalidDeviceType));
exports.BalenaDiscontinuedDeviceType = BalenaDiscontinuedDeviceType;
BalenaDiscontinuedDeviceType.prototype.code = 'BalenaDiscontinuedDeviceType';
/**
 * @summary Balena malformed token
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaMalformedToken('1234')
 */
var BalenaMalformedToken = (function (_super) {
    tslib_1.__extends(BalenaMalformedToken, _super);
    function BalenaMalformedToken(token) {
        var _this = _super.call(this, "Malformed token: " + token) || this;
        _this.token = token;
        return _this;
    }
    return BalenaMalformedToken;
}(BalenaError));
exports.BalenaMalformedToken = BalenaMalformedToken;
BalenaMalformedToken.prototype.code = 'BalenaMalformedToken';
/**
 * @summary The device supervisor is locked
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaSupervisorLockedError()
 */
var BalenaSupervisorLockedError = (function (_super) {
    tslib_1.__extends(BalenaSupervisorLockedError, _super);
    function BalenaSupervisorLockedError(token) {
        var _this = _super.call(this, "Supervisor Locked: " + token) || this;
        _this.token = token;
        return _this;
    }
    return BalenaSupervisorLockedError;
}(BalenaError));
exports.BalenaSupervisorLockedError = BalenaSupervisorLockedError;
BalenaSupervisorLockedError.prototype.code = 'BalenaSupervisorLockedError';
/**
 * @summary Balena expired token
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaExpiredToken('1234')
 */
var BalenaExpiredToken = (function (_super) {
    tslib_1.__extends(BalenaExpiredToken, _super);
    function BalenaExpiredToken(token) {
        var _this = _super.call(this, "The token expired: " + token) || this;
        _this.token = token;
        return _this;
    }
    return BalenaExpiredToken;
}(BalenaError));
exports.BalenaExpiredToken = BalenaExpiredToken;
BalenaExpiredToken.prototype.code = 'BalenaExpiredToken';
/**
 * @summary Balena application not found
 * @class
 * @public
 *
 * @param {(String|Number)} application - application name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaApplicationNotFound('MyApp')
 */
var BalenaApplicationNotFound = (function (_super) {
    tslib_1.__extends(BalenaApplicationNotFound, _super);
    function BalenaApplicationNotFound(application) {
        var _this = _super.call(this, "Application not found: " + application) || this;
        _this.application = application;
        return _this;
    }
    return BalenaApplicationNotFound;
}(BalenaError));
exports.BalenaApplicationNotFound = BalenaApplicationNotFound;
BalenaApplicationNotFound.prototype.code = 'BalenaApplicationNotFound';
/**
 * @summary Balena release not found
 * @class
 * @public
 *
 * @param {(Number)} release - release id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaReleaseNotFound(123)
 */
var BalenaReleaseNotFound = (function (_super) {
    tslib_1.__extends(BalenaReleaseNotFound, _super);
    function BalenaReleaseNotFound(release) {
        var _this = _super.call(this, "Release not found: " + release) || this;
        _this.release = release;
        return _this;
    }
    return BalenaReleaseNotFound;
}(BalenaError));
exports.BalenaReleaseNotFound = BalenaReleaseNotFound;
BalenaReleaseNotFound.prototype.code = 'BalenaReleaseNotFound';
/**
 * @summary Balena image not found
 * @class
 * @public
 *
 * @param {(Number)} image - image id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaImageNotFound(123)
 */
var BalenaImageNotFound = (function (_super) {
    tslib_1.__extends(BalenaImageNotFound, _super);
    function BalenaImageNotFound(image) {
        var _this = _super.call(this, "Image not found: " + image) || this;
        _this.image = image;
        return _this;
    }
    return BalenaImageNotFound;
}(BalenaError));
exports.BalenaImageNotFound = BalenaImageNotFound;
BalenaImageNotFound.prototype.code = 'BalenaImageNotFound';
/**
 * @summary Balena service not found
 * @class
 * @public
 *
 * @param {(Number)} service - service id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaServiceNotFound(123)
 */
var BalenaServiceNotFound = (function (_super) {
    tslib_1.__extends(BalenaServiceNotFound, _super);
    function BalenaServiceNotFound(service) {
        var _this = _super.call(this, "Service not found: " + service) || this;
        _this.service = service;
        return _this;
    }
    return BalenaServiceNotFound;
}(BalenaError));
exports.BalenaServiceNotFound = BalenaServiceNotFound;
BalenaServiceNotFound.prototype.code = 'BalenaServiceNotFound';
/**
 * @summary Balena device not found
 * @class
 * @public
 *
 * @param {(String|Number)} device - device name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaDeviceNotFound('MyDevice')
 */
var BalenaDeviceNotFound = (function (_super) {
    tslib_1.__extends(BalenaDeviceNotFound, _super);
    function BalenaDeviceNotFound(device) {
        var _this = _super.call(this, "Device not found: " + device) || this;
        _this.device = device;
        return _this;
    }
    return BalenaDeviceNotFound;
}(BalenaError));
exports.BalenaDeviceNotFound = BalenaDeviceNotFound;
BalenaDeviceNotFound.prototype.code = 'BalenaDeviceNotFound';
/**
 * @summary Balena ambiguous device
 * @class
 * @public
 *
 * @param {(String|Number)} device - device name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaAmbiguousDevice('MyDevice')
 */
var BalenaAmbiguousDevice = (function (_super) {
    tslib_1.__extends(BalenaAmbiguousDevice, _super);
    function BalenaAmbiguousDevice(device) {
        var _this = _super.call(this, "Device is ambiguous: " + device) || this;
        _this.device = device;
        return _this;
    }
    return BalenaAmbiguousDevice;
}(BalenaError));
exports.BalenaAmbiguousDevice = BalenaAmbiguousDevice;
BalenaAmbiguousDevice.prototype.code = 'BalenaAmbiguousDevice';
/**
 * @summary Balena ambiguous application
 * @class
 * @public
 *
 * @param {(String|Number)} application - application name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaAmbiguousApplication('MyApp')
 */
var BalenaAmbiguousApplication = (function (_super) {
    tslib_1.__extends(BalenaAmbiguousApplication, _super);
    function BalenaAmbiguousApplication(application) {
        var _this = _super.call(this, "Application is ambiguous: " + application) || this;
        _this.application = application;
        return _this;
    }
    return BalenaAmbiguousApplication;
}(BalenaError));
exports.BalenaAmbiguousApplication = BalenaAmbiguousApplication;
BalenaAmbiguousApplication.prototype.code = 'BalenaAmbiguousApplication';
/**
 * @summary Balena key not found
 * @class
 * @public
 *
 * @param {(String|Number)} key - key name, id or value
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaKeyNotFound('MyKey')
 */
var BalenaKeyNotFound = (function (_super) {
    tslib_1.__extends(BalenaKeyNotFound, _super);
    function BalenaKeyNotFound(key) {
        return _super.call(this, "Key not found: " + key) || this;
    }
    return BalenaKeyNotFound;
}(BalenaError));
exports.BalenaKeyNotFound = BalenaKeyNotFound;
BalenaKeyNotFound.prototype.code = 'BalenaKeyNotFound';
/**
 * @summary Balena request error
 * @class
 * @public
 *
 * @param {String} body - response body
 * @param {Number} statusCode - http status code
 * @param {Object} [requestOptions] - options used to make the request
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaRequestError('Unauthorized')
 */
var BalenaRequestError = (function (_super) {
    tslib_1.__extends(BalenaRequestError, _super);
    function BalenaRequestError(body, statusCode, requestOptions) {
        var _this = _super.call(this, "Request error: " + body) || this;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.requestOptions = requestOptions;
        return _this;
    }
    return BalenaRequestError;
}(BalenaError));
exports.BalenaRequestError = BalenaRequestError;
BalenaRequestError.prototype.code = 'BalenaRequestError';
/**
 * @summary Balena not logged in
 * @class
 * @public
 *
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaNotLoggedIn()
 */
var BalenaNotLoggedIn = (function (_super) {
    tslib_1.__extends(BalenaNotLoggedIn, _super);
    function BalenaNotLoggedIn() {
        return _super.call(this, 'You have to log in') || this;
    }
    return BalenaNotLoggedIn;
}(BalenaError));
exports.BalenaNotLoggedIn = BalenaNotLoggedIn;
BalenaNotLoggedIn.prototype.code = 'BalenaNotLoggedIn';
/**
 * @summary Balena invalid parameter
 * @class
 * @public
 *
 * @return {Error} error instance
 *
 * @example
 * const checkId = (id) => {
 * 	if (typeof id !== 'number') {
 * 		throw new errors.BalenaInvalidParameterError('id', id)
 * 	}
 * }
 */
var BalenaInvalidParameterError = (function (_super) {
    tslib_1.__extends(BalenaInvalidParameterError, _super);
    function BalenaInvalidParameterError(parameterName, suppliedValue) {
        var _this = _super.call(this, "Invalid parameter: " + suppliedValue + " is not a valid value for parameter '" + parameterName + "'") || this;
        _this.parameterName = parameterName;
        _this.suppliedValue = suppliedValue;
        return _this;
    }
    return BalenaInvalidParameterError;
}(BalenaError));
exports.BalenaInvalidParameterError = BalenaInvalidParameterError;
BalenaInvalidParameterError.prototype.code = 'BalenaInvalidParameterError';
//# sourceMappingURL=errors.js.map