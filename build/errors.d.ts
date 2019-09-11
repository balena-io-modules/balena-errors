/**
 * @module errors
 */
import { TypedError } from 'typed-error';
export declare class BalenaError extends TypedError {
    code: string;
    exitCode: number;
}
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
export declare class BalenaInvalidDeviceType extends BalenaError {
    type: string;
    constructor(type: string);
}
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
export declare class BalenaDiscontinuedDeviceType extends BalenaInvalidDeviceType {
    type: string;
    constructor(type: string);
}
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
export declare class BalenaMalformedToken extends BalenaError {
    token: string;
    constructor(token: string);
}
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
export declare class BalenaSupervisorLockedError extends BalenaError {
    token: string;
    constructor(token: string);
}
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
export declare class BalenaExpiredToken extends BalenaError {
    token: string;
    constructor(token: string);
}
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
export declare class BalenaApplicationNotFound extends BalenaError {
    application: string | number;
    constructor(application: string | number);
}
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
export declare class BalenaReleaseNotFound extends BalenaError {
    release: number;
    constructor(release: number);
}
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
export declare class BalenaImageNotFound extends BalenaError {
    image: number;
    constructor(image: number);
}
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
export declare class BalenaServiceNotFound extends BalenaError {
    service: number;
    constructor(service: number);
}
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
export declare class BalenaDeviceNotFound extends BalenaError {
    device: string | number;
    constructor(device: string | number);
}
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
export declare class BalenaAmbiguousDevice extends BalenaError {
    device: string | number;
    constructor(device: string | number);
}
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
export declare class BalenaAmbiguousApplication extends BalenaError {
    application: string | number;
    constructor(application: string | number);
}
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
export declare class BalenaAmbiguousRelease extends BalenaError {
    release: string;
    constructor(release: string);
}
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
export declare class BalenaKeyNotFound extends BalenaError {
    constructor(key: string | number);
}
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
export declare class BalenaRequestError extends BalenaError {
    body: string;
    statusCode: number;
    requestOptions: object;
    constructor(body: string, statusCode: number, requestOptions: object);
}
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
export declare class BalenaNotLoggedIn extends BalenaError {
    constructor();
}
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
export declare class BalenaInvalidParameterError extends BalenaError {
    parameterName: string;
    suppliedValue: any;
    constructor(parameterName: string, suppliedValue: any);
}
