"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTasks = exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const task_validation_1 = require("../validations/task.validation");
const task_service_1 = require("../services/task.service");
const create = async (req, res) => {
    try {
        const data = task_validation_1.createTaskSchema.parse(req.body);
        const task = await (0, task_service_1.createTask)(data, req.user.id);
        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.create = create;
const getAll = async (req, res) => {
    try {
        const tasks = await (0, task_service_1.getTasks)();
        res.status(200).json({
            success: true,
            data: tasks,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const task = await (0, task_service_1.getTaskById)(Number(req.params.id));
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        res.status(200).json({
            success: true,
            data: task,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getOne = getOne;
const update = async (req, res) => {
    try {
        const task = await (0, task_service_1.updateTask)(Number(req.params.id), req.body);
        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        await (0, task_service_1.deleteTask)(Number(req.params.id));
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.remove = remove;
const myTasks = async (req, res) => {
    try {
        const tasks = await (0, task_service_1.getMyTasks)(req.user.id);
        res.status(200).json({
            success: true,
            data: tasks,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.myTasks = myTasks;
//# sourceMappingURL=task.controller.js.map