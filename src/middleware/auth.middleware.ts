import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
    id: number;
    email: string;
    role: string;
}

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
        return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({
            success: false,
            message: "Invalid token format.",
        });
        return;
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as UserPayload;

        req.user = decoded;
        next();
    } catch {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
        return;
    }
};

