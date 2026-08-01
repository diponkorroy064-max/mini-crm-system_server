import { Request, Response } from "express";
import { getDashboardStats } from "../services/dashboard.service";

export const getAdminDashboard = async (
    req: Request,
    res: Response
) => {
    try {
        const stats = await getDashboardStats();

        res.status(200).json({
            success: true,
            message: "Dashboard statistics fetched successfully",
            data: stats,
        });

    } catch (error: any) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard statistics",
        });

    }
};
