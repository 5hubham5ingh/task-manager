import mongoose from 'mongoose';
import httpStatus from 'http-status';
// const logger = require('../config/logger');
import ApiError from '../utils/apiError.js';


export const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (process.env.NODE_ENV === 'PRODUCTION' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(process.env.NODE_ENV === 'DEVELOPMENT' && { stack: err.stack }),
  };

  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    // logger.error(err);
    console.log(err);
  }

  res.status(statusCode).send(response);
};

