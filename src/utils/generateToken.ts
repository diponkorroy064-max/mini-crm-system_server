import jwt from "jsonwebtoken";
import type { StringValue } from "ms";

interface JwtPayload {
    id: number;
    email: string;
    role: string;
}

export const generateToken = (payload: JwtPayload) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        {
            expiresIn: (process.env.JWT_EXPIRES_IN || "7d") as StringValue,
        }
    );
};
