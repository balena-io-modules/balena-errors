var ResinApplicationNotFound, ResinDeviceNotFound, ResinDirectoryNotGitRepository, ResinInvalidApplication, ResinInvalidDataKey, ResinInvalidDeviceType, ResinInvalidOption, ResinInvalidParameter, ResinInvalidPath, ResinKeyNotFound, ResinMalformedToken, ResinMissingCredential, ResinMissingDataPrefix, ResinMissingOption, ResinMissingParameter, ResinNoInternetConnection, ResinNoSuchDirectory, ResinNonAllowedOption, ResinNotAny, ResinNotLoggedIn, ResinRequestError, TypedError,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TypedError = require('typed-error');

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

exports.ResinMissingCredential = ResinMissingCredential = (function(_super) {
  __extends(ResinMissingCredential, _super);

  function ResinMissingCredential(credential) {
    this.credential = credential;
    ResinMissingCredential.__super__.constructor.call(this, "Missing credential: " + this.credential);
  }

  ResinMissingCredential.prototype.code = 'ResinMissingCredential';

  ResinMissingCredential.prototype.exitCode = 1;

  return ResinMissingCredential;

})(TypedError);

exports.ResinMissingDataPrefix = ResinMissingDataPrefix = (function(_super) {
  __extends(ResinMissingDataPrefix, _super);

  function ResinMissingDataPrefix() {
    ResinMissingDataPrefix.__super__.constructor.call(this, 'Did you forget to set a prefix?');
  }

  ResinMissingDataPrefix.prototype.code = 'ResinMissingDataPrefix';

  ResinMissingDataPrefix.prototype.exitCode = 1;

  return ResinMissingDataPrefix;

})(TypedError);

exports.ResinNoInternetConnection = ResinNoInternetConnection = (function(_super) {
  __extends(ResinNoInternetConnection, _super);

  function ResinNoInternetConnection() {
    ResinNoInternetConnection.__super__.constructor.call(this, 'You need internet connection to perform this task');
  }

  ResinNoInternetConnection.prototype.code = 'ResinNoInternetConnection';

  ResinNoInternetConnection.prototype.exitCode = 1;

  return ResinNoInternetConnection;

})(TypedError);

exports.ResinInvalidOption = ResinInvalidOption = (function(_super) {
  __extends(ResinInvalidOption, _super);

  function ResinInvalidOption(name, value, explanation) {
    var message;
    this.name = name;
    this.value = value;
    this.explanation = explanation;
    message = "Invalid option " + this.name + ": " + this.value;
    if (this.explanation != null) {
      message += ". " + this.explanation + ".";
    }
    ResinInvalidOption.__super__.constructor.call(this, message);
  }

  ResinInvalidOption.prototype.code = 'ResinInvalidOption';

  ResinInvalidOption.prototype.exitCode = 1;

  return ResinInvalidOption;

})(TypedError);

exports.ResinMissingOption = ResinMissingOption = (function(_super) {
  __extends(ResinMissingOption, _super);

  function ResinMissingOption(name) {
    this.name = name;
    ResinMissingOption.__super__.constructor.call(this, "Missing option: " + this.name);
  }

  ResinMissingOption.prototype.code = 'ResinMissingOption';

  ResinMissingOption.prototype.exitCode = 1;

  return ResinMissingOption;

})(TypedError);

exports.ResinNonAllowedOption = ResinNonAllowedOption = (function(_super) {
  __extends(ResinNonAllowedOption, _super);

  function ResinNonAllowedOption(name) {
    this.name = name;
    ResinNonAllowedOption.__super__.constructor.call(this, "Non allowed option: " + this.name);
  }

  ResinNonAllowedOption.prototype.code = 'ResinNonAllowedOption';

  ResinNonAllowedOption.prototype.exitCode = 1;

  return ResinNonAllowedOption;

})(TypedError);

exports.ResinInvalidParameter = ResinInvalidParameter = (function(_super) {
  __extends(ResinInvalidParameter, _super);

  function ResinInvalidParameter(name, value, explanation) {
    var message;
    this.name = name;
    this.value = value;
    this.explanation = explanation;
    message = "Invalid parameter " + this.name + ": " + this.value;
    if (this.explanation != null) {
      message += ". " + this.explanation + ".";
    }
    ResinInvalidParameter.__super__.constructor.call(this, message);
  }

  ResinInvalidParameter.prototype.code = 'ResinInvalidParameter';

  ResinInvalidParameter.prototype.exitCode = 1;

  return ResinInvalidParameter;

})(TypedError);

exports.ResinMissingParameter = ResinMissingParameter = (function(_super) {
  __extends(ResinMissingParameter, _super);

  function ResinMissingParameter(name) {
    this.name = name;
    ResinMissingParameter.__super__.constructor.call(this, "Missing parameter: " + this.name);
  }

  ResinMissingParameter.prototype.code = 'ResinMissingParameter';

  ResinMissingParameter.prototype.exitCode = 1;

  return ResinMissingParameter;

})(TypedError);

exports.ResinInvalidDataKey = ResinInvalidDataKey = (function(_super) {
  __extends(ResinInvalidDataKey, _super);

  function ResinInvalidDataKey(key) {
    this.key = key;
    ResinInvalidDataKey.__super__.constructor.call(this, "Invalid data key: " + this.key);
  }

  ResinInvalidDataKey.prototype.code = 'ResinInvalidDataKey';

  ResinInvalidDataKey.prototype.exitCode = 1;

  return ResinInvalidDataKey;

})(TypedError);

exports.ResinInvalidPath = ResinInvalidPath = (function(_super) {
  __extends(ResinInvalidPath, _super);

  function ResinInvalidPath(path) {
    this.path = path;
    ResinInvalidPath.__super__.constructor.call(this, "Invalid path: " + this.path);
  }

  ResinInvalidPath.prototype.code = 'ResinInvalidPath';

  ResinInvalidPath.prototype.exitCode = 1;

  return ResinInvalidPath;

})(TypedError);

exports.ResinNoSuchDirectory = ResinNoSuchDirectory = (function(_super) {
  __extends(ResinNoSuchDirectory, _super);

  function ResinNoSuchDirectory(path) {
    this.path = path;
    ResinNoSuchDirectory.__super__.constructor.call(this, "No such directory: " + this.path);
  }

  ResinNoSuchDirectory.prototype.code = 'ResinNoSuchDirectory';

  ResinNoSuchDirectory.prototype.exitCode = 1;

  return ResinNoSuchDirectory;

})(TypedError);

exports.ResinApplicationNotFound = ResinApplicationNotFound = (function(_super) {
  __extends(ResinApplicationNotFound, _super);

  function ResinApplicationNotFound(id) {
    this.id = id;
    ResinApplicationNotFound.__super__.constructor.call(this, "Application not found: " + this.id);
  }

  ResinApplicationNotFound.prototype.code = 'ResinApplicationNotFound';

  ResinApplicationNotFound.prototype.exitCode = 1;

  return ResinApplicationNotFound;

})(TypedError);

exports.ResinDeviceNotFound = ResinDeviceNotFound = (function(_super) {
  __extends(ResinDeviceNotFound, _super);

  function ResinDeviceNotFound(id) {
    this.id = id;
    ResinDeviceNotFound.__super__.constructor.call(this, "Device not found: " + this.id);
  }

  ResinDeviceNotFound.prototype.code = 'ResinDeviceNotFound';

  ResinDeviceNotFound.prototype.exitCode = 1;

  return ResinDeviceNotFound;

})(TypedError);

exports.ResinKeyNotFound = ResinKeyNotFound = (function(_super) {
  __extends(ResinKeyNotFound, _super);

  function ResinKeyNotFound(id) {
    this.id = id;
    ResinKeyNotFound.__super__.constructor.call(this, "Key not found: " + this.id);
  }

  ResinKeyNotFound.prototype.code = 'ResinKeyNotFound';

  ResinKeyNotFound.prototype.exitCode = 1;

  return ResinKeyNotFound;

})(TypedError);

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

exports.ResinInvalidApplication = ResinInvalidApplication = (function(_super) {
  __extends(ResinInvalidApplication, _super);

  function ResinInvalidApplication(application) {
    this.application = application;
    ResinInvalidApplication.__super__.constructor.call(this, "Invalid application: " + this.application);
  }

  ResinInvalidApplication.prototype.code = 'ResinInvalidApplication';

  ResinInvalidApplication.prototype.exitCode = 1;

  return ResinInvalidApplication;

})(TypedError);

exports.ResinDirectoryNotGitRepository = ResinDirectoryNotGitRepository = (function(_super) {
  __extends(ResinDirectoryNotGitRepository, _super);

  function ResinDirectoryNotGitRepository(directory) {
    this.directory = directory;
    ResinDirectoryNotGitRepository.__super__.constructor.call(this, "Directory is not a git repository: " + this.directory);
  }

  ResinDirectoryNotGitRepository.prototype.code = 'ResinDirectoryNotGitRepository';

  ResinDirectoryNotGitRepository.prototype.exitCode = 1;

  return ResinDirectoryNotGitRepository;

})(TypedError);

exports.ResinNotAny = ResinNotAny = (function(_super) {
  __extends(ResinNotAny, _super);

  function ResinNotAny(resource) {
    this.resource = resource;
    ResinNotAny.__super__.constructor.call(this, "You don't have any " + this.resource);
  }

  ResinNotAny.prototype.code = 'ResinNotAny';

  ResinNotAny.prototype.exitCode = 1;

  return ResinNotAny;

})(TypedError);

exports.ResinNotLoggedIn = ResinNotLoggedIn = (function(_super) {
  __extends(ResinNotLoggedIn, _super);

  function ResinNotLoggedIn() {
    ResinNotLoggedIn.__super__.constructor.call(this, 'You have to log in');
  }

  ResinNotLoggedIn.prototype.code = 'ResinNotLoggedIn';

  ResinNotLoggedIn.prototype.exitCode = 1;

  return ResinNotLoggedIn;

})(TypedError);
