import { generateRefreshToken, generateToken } from "../utils/auth.js";

export const getAuthTokens = async (payload) => {
    const token = generateToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
        token,
        refreshToken
    }
};


