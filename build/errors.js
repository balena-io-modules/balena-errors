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
/**
 * @module errors
 */
const typed_error_1 = require("typed-error");
class BalenaError extends typed_error_1.TypedError {
}
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
class BalenaInvalidDeviceType extends BalenaError {
    constructor(type) {
        super(`Invalid device type: ${type}`);
        this.type = type;
    }
}
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
class BalenaDiscontinuedDeviceType extends BalenaInvalidDeviceType {
    constructor(type) {
        super(`Discontinued device type: ${type}`);
        this.type = type;
    }
}
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
class BalenaMalformedToken extends BalenaError {
    constructor(token) {
        super(`Malformed token: ${token}`);
        this.token = token;
    }
}
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
class BalenaSupervisorLockedError extends BalenaError {
    constructor(token) {
        super(`Supervisor Locked: ${token}`);
        this.token = token;
    }
}
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
class BalenaExpiredToken extends BalenaError {
    constructor(token) {
        super(`The token expired: ${token}`);
        this.token = token;
    }
}
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
class BalenaApplicationNotFound extends BalenaError {
    constructor(application) {
        super(`Application not found: ${application}`);
        this.application = application;
    }
}
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
class BalenaReleaseNotFound extends BalenaError {
    constructor(release) {
        super(`Release not found: ${release}`);
        this.release = release;
    }
}
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
class BalenaImageNotFound extends BalenaError {
    constructor(image) {
        super(`Image not found: ${image}`);
        this.image = image;
    }
}
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
class BalenaServiceNotFound extends BalenaError {
    constructor(service) {
        super(`Service not found: ${service}`);
        this.service = service;
    }
}
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
class BalenaDeviceNotFound extends BalenaError {
    constructor(device) {
        super(`Device not found: ${device}`);
        this.device = device;
    }
}
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
class BalenaAmbiguousDevice extends BalenaError {
    constructor(device) {
        super(`Device is ambiguous: ${device}`);
        this.device = device;
    }
}
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
class BalenaAmbiguousApplication extends BalenaError {
    constructor(application) {
        super(`Application is ambiguous: ${application}`);
        this.application = application;
    }
}
exports.BalenaAmbiguousApplication = BalenaAmbiguousApplication;
BalenaAmbiguousApplication.prototype.code = 'BalenaAmbiguousApplication';
/**
 * @summary Balena ambiguous release
 * @class
 * @public
 *
 * @param {(String)} release - release hash
 * @return {Error} error instance
 *
 * @example
 * throw new errors.BalenaAmbiguousRelease('7cf02a6')
 */
class BalenaAmbiguousRelease extends BalenaError {
    constructor(release) {
        super(`Release is ambiguous: There are multiple releases matching the release hash '${release}'`);
        this.release = release;
    }
}
exports.BalenaAmbiguousRelease = BalenaAmbiguousRelease;
BalenaAmbiguousRelease.prototype.code = 'BalenaAmbiguousRelease';
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
class BalenaKeyNotFound extends BalenaError {
    constructor(key) {
        super(`Key not found: ${key}`);
    }
}
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
class BalenaRequestError extends BalenaError {
    constructor(body, statusCode, requestOptions) {
        super(`Request error: ${body}`);
        this.body = body;
        this.statusCode = statusCode;
        this.requestOptions = requestOptions;
    }
}
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
class BalenaNotLoggedIn extends BalenaError {
    constructor() {
        super('You have to log in');
    }
}
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
class BalenaInvalidParameterError extends BalenaError {
    constructor(parameterName, suppliedValue) {
        super(`Invalid parameter: ${suppliedValue} is not a valid value for parameter '${parameterName}'`);
        this.parameterName = parameterName;
        this.suppliedValue = suppliedValue;
    }
}
exports.BalenaInvalidParameterError = BalenaInvalidParameterError;
BalenaInvalidParameterError.prototype.code = 'BalenaInvalidParameterError';
//# sourceMappingURL=errors.js.map