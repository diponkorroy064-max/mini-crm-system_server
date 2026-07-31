import { Router } from "express";
import { create, getAll, getOne, update, remove, myTasks} from "../controllers/task.controller";
import { authorizeRoles } from "../middleware/role.middleware";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Create Task
router.post(
    "/",
    verifyToken,
    authorizeRoles("ADMIN"),
    create
);

// Get All Tasks
router.get(
    "/",
    verifyToken,
    authorizeRoles("ADMIN"),
    getAll
);

// Get Single Task
router.get(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    getOne
);

// Update Task
router.put(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    update
);

// Delete Task
router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("ADMIN"),
    remove
);


/*
|--------------------------------------------------------------------------
| Staff Route
|--------------------------------------------------------------------------
*/

// Logged-in staff's own tasks
router.get(
    "/my/tasks",
    verifyToken,
    authorizeRoles("STAFF"),
    myTasks
);

export default router;
