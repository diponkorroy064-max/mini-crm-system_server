"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDashboard = void 0;
const dashboard_service_1 = require("../services/dashboard.service");
const getAdminDashboard = async (req, res) => {
    try {
        const stats = await (0, dashboard_service_1.getDashboardStats)();
        res.status(200).json({
            success: true,
            message: "Dashboard statistics fetched successfully",
            data: stats,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard statistics",
        });
    }
};
exports.getAdminDashboard = getAdminDashboard;
//# sourceMappingURL=dashboard.controller.js.map