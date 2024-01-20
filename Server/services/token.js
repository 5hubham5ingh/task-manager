import { generateRefreshToken, generateToken } from "../utils/auth.js";

export const getAuthTokens = async (payload) => {
    const authToken = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
        authToken,
        refreshToken
    }
};


