export default {
    PORT: process.env.PORT || 3000,
    MONGO_URI : process.env.MONGO_URI || null,
    JWT_KEY: process.env.JWT_KEY || 'workspce',
    JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY || 'workspace',
    NODE_ENV: process.env.NODE_ENV || 'development',
    SESSION_DURATION: process.env.SESSION_DURATION || "1h",
    EXTENDED_SESSION_DURATION: process.env.EXTENDED_SESSION_DURATION || "1d",
    


}