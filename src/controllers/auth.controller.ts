import { Request, Response } from "express";
import { registerSchema } from "../validations/auth.validation";
import { registerUser } from "../services/auth.service";
import { loginSchema } from "../validations/auth.validation";
import { loginUser } from "../services/auth.service";
import { AuthRequest } from "../middleware/auth.middleware";


export const register = async (
    req: Request,
    res: Response
) => {
    try {
        const data = registerSchema.parse(req.body);

        const user = await registerUser(data);

        res.status(201).json({
            success: true,
            message: "Registration successful",
            data: user,
        });

    } catch (error: any) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};


export const login = async (
    req: Request,
    res: Response
) => {
    try {
        const data = loginSchema.parse(req.body);

        const result = await loginUser(data);

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const getProfile = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user: (req as any).user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

