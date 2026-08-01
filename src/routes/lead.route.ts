import { Router } from "express";

import {
    create,
    getAll,
    getOne,
    update,
    remove,
} from "../controllers/lead.controller";

import { verifyToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = Router();

// Create Lead
router.post(
    "/",
    verifyToken,
    authorizeRoles("ADMIN"),
    create
);

// Get All Leads
router.get(
    "/",
    verifyToken,
    authorizeRoles("ADMIN"),
    getAll
);

// Get Lead By ID
router.get(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    getOne
);

// Update Lead
router.put(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    update
);

// Delete Lead
router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    remove
);

export default router;
