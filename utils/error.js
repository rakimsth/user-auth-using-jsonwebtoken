class RSError extends Error {
  constructor(message, name, httpCode) {
    super();
    this.message = message;
    this.data = {
      message: message,
      name: name || "none",
      httpCode: httpCode || 500
    };
    this.status = httpCode || 500;
    this.stack = new Error(message).stack;
  }
}

const ERR = {
  DEFAULT: new RSError("Error Occured", "none", 500),
  AUTH_FAIL: new RSError("Authentication failed. Please try again.", "auth_fail", 401),
  DATE_FUTURE: new RSError("Date is in future", "date_future", 400),
  INVALID_PAYLOAD: new RSError("Specified field does not contain payload field", 400),
  PWD_SAME: new RSError("Please send different new password", "pwd_same", 400),
  PWD_NOTMATCH: new RSError("Old password does not match.", "pwd_notmatch", 400),
  ROLES_NOEXISTS: new RSError("Role(s) does not exists.", "roles_noexists", 400),
  TOKEN_REQ: new RSError("Must send access_token", "token_req", 500),
  TOKEN_EXP: new RSError("Token Expired...", "token_exp", 500),
  UNAUTHORIZED: new RSError("Unauthorized access", "unauthorized", 401),
  USER_NOEXISTS: new RSError("User does not exists.", "user_noexists", 400)
};

const throwError = err => {
  throw err;
};

module.exports = {
  Error,
  ERR,
  throwError
};
