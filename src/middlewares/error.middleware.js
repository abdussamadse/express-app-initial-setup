import ApiError from "../utils/ApiError.js";

export const notFoundMiddleware = (req, res, next) => {
  next(new ApiError(`Cannot find ${req.originalUrl} on this server`, 404));
};

export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: err.status || "error",
    message: err.message || "An unexpected error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
