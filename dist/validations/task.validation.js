"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskSchema = void 0;
const zod_1 = require("zod");
exports.createTaskSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, "Title must be at least 3 characters"),
    description: zod_1.z
        .string()
        .optional(),
    priority: zod_1.z
        .enum(["LOW", "MEDIUM", "HIGH"])
        .optional(),
    status: zod_1.z
        .enum(["PENDING", "IN_PROGRESS", "COMPLETED"])
        .optional(),
    dueDate: zod_1.z
        .string()
        .optional(),
    assignedToId: zod_1.z
        .number()
        .optional(),
});
//# sourceMappingURL=task.validation.js.map