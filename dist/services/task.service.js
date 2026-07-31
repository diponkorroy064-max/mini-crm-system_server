"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyTasks = exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createTask = async (data, adminId) => {
    return await prisma_1.default.task.create({
        data: {
            title: data.title,
            description: data.description,
            priority: data.priority,
            status: data.status,
            dueDate: data.dueDate
                ? new Date(data.dueDate)
                : undefined,
            createdById: adminId,
            assignedToId: data.assignedToId,
        },
        include: {
            assignedTo: true,
            createdBy: true,
        },
    });
};
exports.createTask = createTask;
const getTasks = async () => {
    return await prisma_1.default.task.findMany({
        include: {
            assignedTo: true,
            createdBy: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getTasks = getTasks;
const getTaskById = async (id) => {
    return await prisma_1.default.task.findUnique({
        where: {
            id,
        },
        include: {
            assignedTo: true,
            createdBy: true,
        },
    });
};
exports.getTaskById = getTaskById;
const updateTask = async (id, data) => {
    return await prisma_1.default.task.update({
        where: {
            id,
        },
        data: {
            ...data,
            dueDate: data.dueDate
                ? new Date(data.dueDate)
                : undefined,
        },
    });
};
exports.updateTask = updateTask;
const deleteTask = async (id) => {
    return await prisma_1.default.task.delete({
        where: {
            id,
        },
    });
};
exports.deleteTask = deleteTask;
// for staff--
const getMyTasks = async (userId) => {
    return await prisma_1.default.task.findMany({
        where: {
            assignedToId: userId,
        },
        include: {
            createdBy: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getMyTasks = getMyTasks;
//# sourceMappingURL=task.service.js.map