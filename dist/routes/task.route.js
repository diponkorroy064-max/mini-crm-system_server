"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const role_middleware_1 = require("../middleware/role.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/
// Create Task
router.post("/", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), task_controller_1.create);
// Get All Tasks
router.get("/", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), task_controller_1.getAll);
// Get Single Task
router.get("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), task_controller_1.getOne);
// Update Task
router.put("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), task_controller_1.update);
// Delete Task
router.delete("/:id", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("ADMIN"), task_controller_1.remove);
/*
|--------------------------------------------------------------------------
| Staff Route
|--------------------------------------------------------------------------
*/
// Logged-in staff's own tasks
router.get("/my/tasks", auth_middleware_1.verifyToken, (0, role_middleware_1.authorizeRoles)("STAFF"), task_controller_1.myTasks);
exports.default = router;
//# sourceMappingURL=task.route.js.map