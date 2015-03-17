TypedError = require('typed-error')

###*
# An invalid device type error
# @class ResinInvalidDeviceType
#
# @param {String} type - the invalid device type
###
exports.ResinInvalidDeviceType = class ResinInvalidDeviceType extends TypedError
	constructor: (@type) ->
		###*
		# @name type
		# @type String
		# @memberof ResinInvalidDeviceType
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidDeviceType
		# @instance
		# @constant
		# @default Invalid device type: this.type
		###
		super("Invalid device type: #{@type}")

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidDeviceType
	# @instance
	# @constant
	# @default ResinInvalidDeviceType
	###
	code: 'ResinInvalidDeviceType'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidDeviceType
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A missing credential error
# @class ResinMissingCredential
#
# @param {String} credential - the missing credential name
###
exports.ResinMissingCredential = class ResinMissingCredential extends TypedError
	constructor: (@credential) ->
		###*
		# @name credential
		# @type String
		# @memberof ResinMissingCredential
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinMissingCredential
		# @instance
		# @constant
		# @default Missing credential: this.credential
		###
		super("Missing credential: #{@credential}")

	###*
	# @name code
	# @type String
	# @memberof ResinMissingCredential
	# @instance
	# @constant
	# @default ResinMissingCredential
	###
	code: 'ResinMissingCredential'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinMissingCredential
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A missing data prefix error
# @class ResinMissingDataPrefix
###
exports.ResinMissingDataPrefix = class ResinMissingDataPrefix extends TypedError
	constructor: ->

		###*
		# @name message
		# @type String
		# @memberof ResinMissingDataPrefix
		# @instance
		# @constant
		# @default Did you forget to set a prefix?
		###
		super('Did you forget to set a prefix?')

	###*
	# @name code
	# @type String
	# @memberof ResinMissingDataPrefix
	# @instance
	# @constant
	# @default ResinMissingDataPrefix
	###
	code: 'ResinMissingDataPrefix'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinMissingDataPrefix
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A no internet connection error
# @class ResinNoInternetConnection
###
exports.ResinNoInternetConnection = class ResinNoInternetConnection extends TypedError
	constructor: ->

		###*
		# @name message
		# @type String
		# @memberof ResinNoInternetConnection
		# @instance
		# @constant
		# @default You need internet connection to perform this task
		###
		super('You need internet connection to perform this task')

	###*
	# @name code
	# @type String
	# @memberof ResinNoInternetConnection
	# @instance
	# @constant
	# @default ResinNoInternetConnection
	###
	code: 'ResinNoInternetConnection'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinNoInternetConnection
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An invalid option error
# @class ResinInvalidOption
#
# @param {String} name - the invalid option name
# @param {*} value - the invalid option value
# @param {String} [explanation] - an optional explanation
###
exports.ResinInvalidOption = class ResinInvalidOption extends TypedError
	constructor: (@name, @value, @explanation) ->

		###*
		# @name name
		# @type String
		# @memberof ResinInvalidOption
		# @instance
		# @constant
		###

		###*
		# @name value
		# @type *
		# @memberof ResinInvalidOption
		# @instance
		# @constant
		###

		###*
		# @name explanation
		# @type String
		# @memberof ResinInvalidOption
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidOption
		# @instance
		# @constant
		# @default Invalid option this.name: this.value. this.explanation.
		###
		message = "Invalid option #{@name}: #{@value}"

		if @explanation?
			message += ". #{@explanation}."

		super(message)

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidOption
	# @instance
	# @constant
	# @default ResinInvalidOption
	###
	code: 'ResinInvalidOption'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidOption
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A missing option error
# @class ResinMissingOption
#
# @param {String} name - the missing option name
###
exports.ResinMissingOption = class ResinMissingOption extends TypedError
	constructor: (@name) ->

		###*
		# @name name
		# @type String
		# @memberof ResinMissingOption
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinMissingOption
		# @instance
		# @constant
		# @default Missing option: this.name
		###
		super("Missing option: #{@name}")

	###*
	# @name code
	# @type String
	# @memberof ResinMissingOption
	# @instance
	# @constant
	# @default ResinMissingOption
	###
	code: 'ResinMissingOption'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinMissingOption
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A non allowed option error
# @class ResinNonAllowedOption
#
# @param {String} name - the non allowed option name
###
exports.ResinNonAllowedOption = class ResinNonAllowedOption extends TypedError
	constructor: (@name) ->

		###*
		# @name name
		# @type String
		# @memberof ResinNonAllowedOption
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinNonAllowedOption
		# @instance
		# @constant
		# @default Non allowed option: this.name
		###
		super("Non allowed option: #{@name}")

	###*
	# @name code
	# @type String
	# @memberof ResinNonAllowedOption
	# @instance
	# @constant
	# @default ResinNonAllowedOption
	###
	code: 'ResinNonAllowedOption'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinNonAllowedOption
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An invalid parameter error
# @class ResinInvalidParameter
#
# @param {String} name - the invalid parameter name
# @param {*} value - the invalid parameter value
# @param {String} [explanation] - an optional explanation
###
exports.ResinInvalidParameter = class ResinInvalidParameter extends TypedError
	constructor: (@name, @value, @explanation) ->

		###*
		# @name name
		# @type String
		# @memberof ResinInvalidParameter
		# @instance
		# @constant
		###

		###*
		# @name value
		# @type *
		# @memberof ResinInvalidParameter
		# @instance
		# @constant
		###

		###*
		# @name explanation
		# @type String
		# @memberof ResinInvalidParameter
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidParameter
		# @instance
		# @constant
		# @default Invalid parameter this.name: this.value. this.explanation.
		###
		message = "Invalid parameter #{@name}: #{@value}"

		if @explanation?
			message += ". #{@explanation}."

		super(message)

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidParameter
	# @instance
	# @constant
	# @default ResinInvalidParameter
	###
	code: 'ResinInvalidParameter'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidParameter
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A missing parameter error
# @class ResinMissingParameter
#
# @param {String} name - the missing parameter name
###
exports.ResinMissingParameter = class ResinMissingParameter extends TypedError
	constructor: (@name) ->

		###*
		# @name name
		# @type String
		# @memberof ResinMissingParameter
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinMissingParameter
		# @instance
		# @constant
		# @default Missing parameter: this.name
		###
		super("Missing parameter: #{@name}")

	###*
	# @name code
	# @type String
	# @memberof ResinMissingParameter
	# @instance
	# @constant
	# @default ResinMissingParameter
	###
	code: 'ResinMissingParameter'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinMissingParameter
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An invalid data key error
# @class ResinInvalidDataKey
#
# @param {String} key - the invalid data key
###
exports.ResinInvalidDataKey = class ResinInvalidDataKey extends TypedError
	constructor: (@key) ->

		###*
		# @name key
		# @type String
		# @memberof ResinInvalidDataKey
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidDataKey
		# @instance
		# @constant
		# @default Invalid data key: this.key
		###
		super("Invalid data key: #{@key}")

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidDataKey
	# @instance
	# @constant
	# @default ResinInvalidDataKey
	###
	code: 'ResinInvalidDataKey'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidDataKey
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An invalid path error
# @class ResinInvalidPath
#
# @param {String} path - the invalid path
###
exports.ResinInvalidPath = class ResinInvalidPath extends TypedError
	constructor: (@path) ->

		###*
		# @name path
		# @type String
		# @memberof ResinInvalidPath
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidPath
		# @instance
		# @constant
		# @default Invalid path: this.path
		###
		super("Invalid path: #{@path}")

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidPath
	# @instance
	# @constant
	# @default ResinInvalidPath
	###
	code: 'ResinInvalidPath'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidPath
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A no such directory error
# @class ResinNoSuchDirectory
#
# @param {String} path - the path that is not a directory
###
exports.ResinNoSuchDirectory = class ResinNoSuchDirectory extends TypedError
	constructor: (@path) ->

		###*
		# @name path
		# @type String
		# @memberof ResinNoSuchDirectory
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinNoSuchDirectory
		# @instance
		# @constant
		# @default No such directory: this.path
		###
		super("No such directory: #{@path}")

	###*
	# @name code
	# @type String
	# @memberof ResinNoSuchDirectory
	# @instance
	# @constant
	# @default ResinNoSuchDirectory
	###
	code: 'ResinNoSuchDirectory'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinNoSuchDirectory
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An application not found error
# @class ResinApplicationNotFound
#
# @param {String|Number} id - the not found application id
###
exports.ResinApplicationNotFound = class ResinApplicationNotFound extends TypedError
	constructor: (@id) ->

		###*
		# @name id
		# @type String|Number
		# @memberof ResinApplicationNotFound
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinApplicationNotFound
		# @instance
		# @constant
		# @default Application not found: this.id
		###
		super("Application not found: #{@id}")

	###*
	# @name code
	# @type String
	# @memberof ResinApplicationNotFound
	# @instance
	# @constant
	# @default ResinApplicationNotFound
	###
	code: 'ResinApplicationNotFound'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinApplicationNotFound
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A device not found error
# @class ResinDeviceNotFound
#
# @param {String|Number} id - the not found device id
###
exports.ResinDeviceNotFound = class ResinDeviceNotFound extends TypedError
	constructor: (@id) ->

		###*
		# @name id
		# @type String|Number
		# @memberof ResinDeviceNotFound
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinDeviceNotFound
		# @instance
		# @constant
		# @default Device not found: this.id
		###
		super("Device not found: #{@id}")

	###*
	# @name code
	# @type String
	# @memberof ResinDeviceNotFound
	# @instance
	# @constant
	# @default ResinDeviceNotFound
	###
	code: 'ResinDeviceNotFound'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinDeviceNotFound
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A key not found error
# @class ResinKeyNotFound
#
# @param {String|Number} id - the not found key id
###
exports.ResinKeyNotFound = class ResinKeyNotFound extends TypedError
	constructor: (@id) ->

		###*
		# @name id
		# @type String|Number
		# @memberof ResinKeyNotFound
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinKeyNotFound
		# @instance
		# @constant
		# @default Key not found: this.id
		###
		super("Key not found: #{@id}")

	###*
	# @name code
	# @type String
	# @memberof ResinKeyNotFound
	# @instance
	# @constant
	# @default ResinKeyNotFound
	###
	code: 'ResinKeyNotFound'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinKeyNotFound
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A request error
# @class ResinKeyNotFound
#
# @param {String|Object} body - the response body
###
exports.ResinRequestError = class ResinRequestError extends TypedError
	constructor: (@body) ->

		###*
		# @name body
		# @type String|Object
		# @memberof ResinRequestError
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinRequestError
		# @instance
		# @constant
		# @default Request error: this.body
		###
		super("Request error: #{@body}")

	###*
	# @name code
	# @type String
	# @memberof ResinRequestError
	# @instance
	# @constant
	# @default ResinRequestError
	###
	code: 'ResinRequestError'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinRequestError
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# An invalid application error
# @class ResinInvalidApplication
#
# @param {String} application - the invalid application name
###
exports.ResinInvalidApplication = class ResinInvalidApplication extends TypedError
	constructor: (@application) ->

		###*
		# @name application
		# @type String
		# @memberof ResinInvalidApplication
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinInvalidApplication
		# @instance
		# @constant
		# @default Invalid application: this.application
		###
		super("Invalid application: #{@application}")

	###*
	# @name code
	# @type String
	# @memberof ResinInvalidApplication
	# @instance
	# @constant
	# @default ResinInvalidApplication
	###
	code: 'ResinInvalidApplication'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinInvalidApplication
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A directory not git repository error
# @class ResinDirectoryNotGitRepository
#
# @param {String} directory - the directory path
###
exports.ResinDirectoryNotGitRepository = class ResinDirectoryNotGitRepository extends TypedError
	constructor: (@directory) ->

		###*
		# @name directory
		# @type String
		# @memberof ResinDirectoryNotGitRepository
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinDirectoryNotGitRepository
		# @instance
		# @constant
		# @default Invalid application: this.application
		###
		super("Directory is not a git repository: #{@directory}")

	###*
	# @name code
	# @type String
	# @memberof ResinDirectoryNotGitRepository
	# @instance
	# @constant
	# @default ResinDirectoryNotGitRepository
	###
	code: 'ResinDirectoryNotGitRepository'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinDirectoryNotGitRepository
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1

###*
# A not any error
# @class ResinNotAny
#
# @param {String} resource - the resource name
###
exports.ResinNotAny = class ResinNotAny extends TypedError
	constructor: (@resource) ->

		###*
		# @name resource
		# @type String
		# @memberof ResinNotAny
		# @instance
		# @constant
		###

		###*
		# @name message
		# @type String
		# @memberof ResinNotAny
		# @instance
		# @constant
		# @default You don't have any this.resource
		###
		super("You don't have any #{@resource}")

	###*
	# @name code
	# @type String
	# @memberof ResinNotAny
	# @instance
	# @constant
	# @default ResinNotAny
	###
	code: 'ResinNotAny'

	###*
	# @name exitCode
	# @type Number
	# @memberof ResinNotAny
	# @instance
	# @constant
	# @default 1
	###
	exitCode: 1
