import { Router } from "express";

import { getAdminDashboard } from "../controllers/dashboard.controller";

import { verifyToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = Router();

// Admin Dashboard Statistics
router.get(
    "/admin",
    verifyToken,
    authorizeRoles("ADMIN"),
    getAdminDashboard
);

export default router;
