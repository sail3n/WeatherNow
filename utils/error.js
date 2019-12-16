const config = require("config");
class RSError extends Error {
  constructor(message, name, httpCode) {
    super();
    this.message = message;
    this.data = {
      group: config.get("app.name"),
      type: "rserror",
      message: message,
      name: name || "none",
      httpCode: httpCode || 500
    };
    this.status = httpCode || 500;
    this.className = this.constructor.name;
    this.stack = new Error(message).stack;
  }
}

const ERR = {
  DEFAULT: new RSError("Error Occured", "none", 500),
  AUTH_FAIL: new RSError("Authentication failed. Please try again.", "auth_fail", 401),
  PASS_MISMATCH: new RSError("Incorrect Password", "pass_mismatch", 400),
  USER_NOEXISTS: new RSError("User with this email does not exists.", "user_noexists", 400)
};

const throwError = err => {
  throw err;
};
module.exports = { Error: RSError, ERR, throwError };
