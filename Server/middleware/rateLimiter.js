import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10,
    skipSuccessfulRequests: true,
    handler: (req, res, next) => {
      return res.status(429).json({
        status: "error",
        message: "Too many requests, please try again later.",
      });
    },
  });

  export default authLimiter;

