###
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
###

###*
# @module errors
###

TypedError = require('typed-error')

###*
#	@summary Resin invalid device type
# @class
# @public
#
# @param {String} type - device type
# @return {Error} error instance
#
# @example
# throw new errors.ResinInvalidDeviceType('raspberry-pi')
###
exports.ResinInvalidDeviceType = class ResinInvalidDeviceType extends TypedError
	constructor: (@type) ->
		super("Invalid device type: #{@type}")

	code: 'ResinInvalidDeviceType'
	exitCode: 1

###*
#	@summary Resin malformed token
# @class
# @public
#
# @param {String} token - token
# @return {Error} error instance
#
# @example
# throw new errors.ResinMalformedToken('1234')
###
exports.ResinMalformedToken = class ResinMalformedToken extends TypedError
	constructor: (@token) ->
		super("Malformed token: #{@token}")

	code: 'ResinMalformedToken'
	exitCode: 1

###*
#	@summary Resin application not found
# @class
# @public
#
# @param {(String|Number)} application - application name or id
# @return {Error} error instance
#
# @example
# throw new errors.ResinApplicationNotFound('MyApp')
###
exports.ResinApplicationNotFound = class ResinApplicationNotFound extends TypedError
	constructor: (@application) ->
		super("Application not found: #{@application}")

	code: 'ResinApplicationNotFound'
	exitCode: 1

###*
#	@summary Resin device not found
# @class
# @public
#
# @param {(String|Number)} device - device name or id
# @return {Error} error instance
#
# @example
# throw new errors.ResinDeviceNotFound('MyDevice')
###
exports.ResinDeviceNotFound = class ResinDeviceNotFound extends TypedError
	constructor: (@device) ->
		super("Device not found: #{@device}")

	code: 'ResinDeviceNotFound'
	exitCode: 1

###*
#	@summary Resin key not found
# @class
# @public
#
# @param {(String|Number)} key - key name, id or value
# @return {Error} error instance
#
# @example
# throw new errors.ResinKeyNotFound('MyKey')
###
exports.ResinKeyNotFound = class ResinKeyNotFound extends TypedError
	constructor: (@key) ->
		super("Key not found: #{@key}")

	code: 'ResinKeyNotFound'
	exitCode: 1

###*
#	@summary Resin request error
# @class
# @public
#
# @param {String} body - response body
# @return {Error} error instance
#
# @example
# throw new errors.ResinRequestError('Unauthorized')
###
exports.ResinRequestError = class ResinRequestError extends TypedError
	constructor: (@body) ->
		super("Request error: #{@body}")

	code: 'ResinRequestError'
	exitCode: 1

###*
#	@summary Resin not logged in
# @class
# @public
#
# @return {Error} error instance
#
# @example
# throw new errors.ResinNotLoggedIn()
###
exports.ResinNotLoggedIn = class ResinNotLoggedIn extends TypedError
	constructor: ->
		super('You have to log in')

	code: 'ResinNotLoggedIn'
	exitCode: 1
