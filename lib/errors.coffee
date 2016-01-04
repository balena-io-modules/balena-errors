###
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
