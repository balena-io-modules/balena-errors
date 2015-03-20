TypedError = require('typed-error')

exports.ResinInvalidDeviceType = class ResinInvalidDeviceType extends TypedError
	constructor: (@type) ->
		super("Invalid device type: #{@type}")

	code: 'ResinInvalidDeviceType'
	exitCode: 1

exports.ResinMalformedToken = class ResinMalformedToken extends TypedError
	constructor: (@token) ->
		super("Malformed token: #{@token}")

	code: 'ResinMalformedToken'
	exitCode: 1

exports.ResinMissingCredential = class ResinMissingCredential extends TypedError
	constructor: (@credential) ->
		super("Missing credential: #{@credential}")

	code: 'ResinMissingCredential'
	exitCode: 1

exports.ResinMissingDataPrefix = class ResinMissingDataPrefix extends TypedError
	constructor: ->
		super('Did you forget to set a prefix?')

	code: 'ResinMissingDataPrefix'
	exitCode: 1

exports.ResinNoInternetConnection = class ResinNoInternetConnection extends TypedError
	constructor: ->
		super('You need internet connection to perform this task')

	code: 'ResinNoInternetConnection'
	exitCode: 1

exports.ResinInvalidOption = class ResinInvalidOption extends TypedError
	constructor: (@name, @value, @explanation) ->
		message = "Invalid option #{@name}: #{@value}"

		if @explanation?
			message += ". #{@explanation}."

		super(message)

	code: 'ResinInvalidOption'
	exitCode: 1

exports.ResinMissingOption = class ResinMissingOption extends TypedError
	constructor: (@name) ->
		super("Missing option: #{@name}")

	code: 'ResinMissingOption'
	exitCode: 1

exports.ResinNonAllowedOption = class ResinNonAllowedOption extends TypedError
	constructor: (@name) ->
		super("Non allowed option: #{@name}")

	code: 'ResinNonAllowedOption'
	exitCode: 1

exports.ResinInvalidParameter = class ResinInvalidParameter extends TypedError
	constructor: (@name, @value, @explanation) ->
		message = "Invalid parameter #{@name}: #{@value}"

		if @explanation?
			message += ". #{@explanation}."

		super(message)

	code: 'ResinInvalidParameter'
	exitCode: 1

exports.ResinMissingParameter = class ResinMissingParameter extends TypedError
	constructor: (@name) ->
		super("Missing parameter: #{@name}")

	code: 'ResinMissingParameter'
	exitCode: 1

exports.ResinInvalidDataKey = class ResinInvalidDataKey extends TypedError
	constructor: (@key) ->
		super("Invalid data key: #{@key}")

	code: 'ResinInvalidDataKey'
	exitCode: 1

exports.ResinInvalidPath = class ResinInvalidPath extends TypedError
	constructor: (@path) ->
		super("Invalid path: #{@path}")

	code: 'ResinInvalidPath'
	exitCode: 1

exports.ResinNoSuchDirectory = class ResinNoSuchDirectory extends TypedError
	constructor: (@path) ->
		super("No such directory: #{@path}")

	code: 'ResinNoSuchDirectory'
	exitCode: 1

exports.ResinApplicationNotFound = class ResinApplicationNotFound extends TypedError
	constructor: (@id) ->
		super("Application not found: #{@id}")

	code: 'ResinApplicationNotFound'
	exitCode: 1

exports.ResinDeviceNotFound = class ResinDeviceNotFound extends TypedError
	constructor: (@id) ->
		super("Device not found: #{@id}")

	code: 'ResinDeviceNotFound'
	exitCode: 1

exports.ResinKeyNotFound = class ResinKeyNotFound extends TypedError
	constructor: (@id) ->
		super("Key not found: #{@id}")

	code: 'ResinKeyNotFound'
	exitCode: 1

exports.ResinRequestError = class ResinRequestError extends TypedError
	constructor: (@body) ->
		super("Request error: #{@body}")

	code: 'ResinRequestError'
	exitCode: 1

exports.ResinInvalidApplication = class ResinInvalidApplication extends TypedError
	constructor: (@application) ->
		super("Invalid application: #{@application}")

	code: 'ResinInvalidApplication'
	exitCode: 1

exports.ResinDirectoryNotGitRepository = class ResinDirectoryNotGitRepository extends TypedError
	constructor: (@directory) ->
		super("Directory is not a git repository: #{@directory}")

	code: 'ResinDirectoryNotGitRepository'
	exitCode: 1

exports.ResinNotAny = class ResinNotAny extends TypedError
	constructor: (@resource) ->
		super("You don't have any #{@resource}")

	code: 'ResinNotAny'
	exitCode: 1

exports.ResinNotLoggedIn = class ResinNotLoggedIn extends TypedError
	constructor: ->
		super('You have to log in')

	code: 'ResinNotLoggedIn'
	exitCode: 1
