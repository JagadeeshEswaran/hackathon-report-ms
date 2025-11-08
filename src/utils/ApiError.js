class ApiError extends Error {
	constructor(statusCode, message) {
		super(message);

		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
		this.isOperationsl = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = ApiError;
