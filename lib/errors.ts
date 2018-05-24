/*
Copyright 2016 Resin.io

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

/**
 * @module errors
 */

import TypedError = require('typed-error');

export class ResinError extends TypedError {
	public code: string;
	public exitCode: number;
}
ResinError.prototype.code = 'ResinError';
ResinError.prototype.exitCode = 1;

/**
 * @summary Resin invalid device type
 * @class
 * @public
 *
 * @param {String} type - device type
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinInvalidDeviceType('raspberry-pi')
 */
export class ResinInvalidDeviceType extends ResinError {
	constructor(public type: string) {
		super(`Invalid device type: ${type}`);
	}
}
ResinInvalidDeviceType.prototype.code = 'ResinInvalidDeviceType';

/**
 * @summary Resin discontinued device type
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
 * throw new errors.ResinDiscontinuedDeviceType('edge')
 */
export class ResinDiscontinuedDeviceType extends ResinInvalidDeviceType {
	constructor(public type: string) {
		super(`Discontinued device type: ${type}`);
	}
}
ResinDiscontinuedDeviceType.prototype.code = 'ResinDiscontinuedDeviceType';

/**
 * @summary Resin malformed token
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinMalformedToken('1234')
 */
export class ResinMalformedToken extends ResinError {
	constructor(public token: string) {
		super(`Malformed token: ${token}`);
	}
}
ResinMalformedToken.prototype.code = 'ResinMalformedToken';

/**
 * @summary The device supervisor is locked
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinSupervisorLockedError()
 */
export class ResinSupervisorLockedError extends ResinError {
	constructor(public token: string) {
		super(`Supervisor Locked: ${token}`);
	}
}
ResinSupervisorLockedError.prototype.code = 'ResinSupervisorLockedError';

/**
 * @summary Resin expired token
 * @class
 * @public
 *
 * @param {String} token - token
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinExpiredToken('1234')
 */
export class ResinExpiredToken extends ResinError {
	constructor(public token: string) {
		super(`The token expired: ${token}`);
	}
}
ResinExpiredToken.prototype.code = 'ResinExpiredToken';

/**
 * @summary Resin application not found
 * @class
 * @public
 *
 * @param {(String|Number)} application - application name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinApplicationNotFound('MyApp')
 */
export class ResinApplicationNotFound extends ResinError {
	constructor(public application: string | number) {
		super(`Application not found: ${application}`);
	}
}
ResinApplicationNotFound.prototype.code = 'ResinApplicationNotFound';

/**
 * @summary Resin build not found
 * @class
 * @public
 * @deprecated From the new v4 API, ResinReleaseNotFound should be used instead
 *
 * @param {(Number)} build - build id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinBuildNotFound(123)
 */
export class ResinBuildNotFound extends ResinError {
	constructor(public build: number) {
		super(`Build not found: ${build}`);
	}
}
ResinBuildNotFound.prototype.code = 'ResinBuildNotFound';

/**
 * @summary Resin release not found
 * @class
 * @public
 *
 * @param {(Number)} release - release id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinReleaseNotFound(123)
 */
export class ResinReleaseNotFound extends ResinError {
	constructor(public release: number) {
		super(`Release not found: ${release}`);
	}
}
ResinReleaseNotFound.prototype.code = 'ResinReleaseNotFound';

/**
 * @summary Resin image not found
 * @class
 * @public
 *
 * @param {(Number)} image - image id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinImageNotFound(123)
 */
export class ResinImageNotFound extends ResinError {
	constructor(public image: number) {
		super(`Image not found: ${image}`);
	}
}
ResinImageNotFound.prototype.code = 'ResinImageNotFound';

/**
 * @summary Resin service not found
 * @class
 * @public
 *
 * @param {(Number)} service - service id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinServiceNotFound(123)
 */
export class ResinServiceNotFound extends ResinError {
	constructor(public service: number) {
		super(`Service not found: ${service}`);
	}
}
ResinServiceNotFound.prototype.code = 'ResinServiceNotFound';

/**
 * @summary Resin device not found
 * @class
 * @public
 *
 * @param {(String|Number)} device - device name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinDeviceNotFound('MyDevice')
 */
export class ResinDeviceNotFound extends ResinError {
	constructor(public device: string | number) {
		super(`Device not found: ${device}`);
	}
}
ResinDeviceNotFound.prototype.code = 'ResinDeviceNotFound';

/**
 * @summary Resin ambiguous device
 * @class
 * @public
 *
 * @param {(String|Number)} device - device name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinAmbiguousDevice('MyDevice')
 */
export class ResinAmbiguousDevice extends ResinError {
	constructor(public device: string | number) {
		super(`Device is ambiguous: ${device}`);
	}
}
ResinAmbiguousDevice.prototype.code = 'ResinAmbiguousDevice';

/**
 * @summary Resin ambiguous application
 * @class
 * @public
 *
 * @param {(String|Number)} application - application name or id
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinAmbiguousApplication('MyApp')
 */
export class ResinAmbiguousApplication extends ResinError {
	constructor(public application: string | number) {
		super(`Application is ambiguous: ${application}`);
	}
}
ResinAmbiguousApplication.prototype.code = 'ResinAmbiguousApplication';

/**
 * @summary Resin key not found
 * @class
 * @public
 *
 * @param {(String|Number)} key - key name, id or value
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinKeyNotFound('MyKey')
 */
export class ResinKeyNotFound extends ResinError {
	constructor(key: string | number) {
		super(`Key not found: ${key}`);
	}
}
ResinKeyNotFound.prototype.code = 'ResinKeyNotFound';

/**
 * @summary Resin request error
 * @class
 * @public
 *
 * @param {String} body - response body
 * @param {Number} statusCode - http status code
 * @param {Object} [requestOptions] - options used to make the request
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinRequestError('Unauthorized')
 */
export class ResinRequestError extends ResinError {
	constructor(
		public body: string,
		public statusCode: number,
		public requestOptions: object
	) {
		super(`Request error: ${body}`);
	}
}
ResinRequestError.prototype.code = 'ResinRequestError';

/**
 * @summary Resin not logged in
 * @class
 * @public
 *
 * @return {Error} error instance
 *
 * @example
 * throw new errors.ResinNotLoggedIn()
 */
export class ResinNotLoggedIn extends ResinError {
	constructor() {
		super('You have to log in');
	}
}
ResinNotLoggedIn.prototype.code = 'ResinNotLoggedIn';

/**
 * @summary Resin invalid parameter
 * @class
 * @public
 *
 * @return {Error} error instance
 *
 * @example
 * const checkId = (id) => {
 * 	if (typeof id !== 'number') {
 * 		throw new errors.ResinInvalidParameterError('id', id)
 * 	}
 * }
 */
export class ResinInvalidParameterError extends ResinError {
	constructor(public parameterName: string, public suppliedValue: any) {
		super(
			`Invalid parameter: ${suppliedValue} is not a valid value for parameter '${parameterName}'`
		);
	}
}
ResinInvalidParameterError.prototype.code = 'ResinInvalidParameterError';
