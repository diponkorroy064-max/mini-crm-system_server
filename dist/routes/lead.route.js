"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lead_controller_1 = require("../controllers/lead.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const role_middleware_1 = require("../middleware/role.middleware");
const router = (0, express_1.Router)();
// Create Lead
router.post("/", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), lead_controller_1.create);
// Get All Leads
router.get("/", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), lead_controller_1.getAll);
// Get Lead By ID
router.get("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), lead_controller_1.getOne);
// Update Lead
router.put("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), lead_controller_1.update);
// Delete Lead
router.delete("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), lead_controller_1.remove);
exports.default = router;
//# sourceMappingURL=lead.route.js.map