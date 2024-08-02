class Error_Handler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const error_middleware = (err, _req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.name === "CastError") {
        const message = `Resource Not Found. Invalid: ${err.path}`;
        err = new Error_Handler(message, 400);
    }
    if (err.name === 'ValidationError') {
        const validationErrors = Object.values(err.errors).map(err => err.message);
        return next(new Error_Handler(validationErrors.join(', '), 400));
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default Error_Handler;