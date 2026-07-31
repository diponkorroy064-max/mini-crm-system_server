import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

import {
    createTaskSchema,
} from "../validations/task.validation";

import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    getMyTasks,
} from "../services/task.service";


export const create = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const data = createTaskSchema.parse(req.body);

        const task = await createTask(
            data,
            req.user.id
        );

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAll = async (
    req: Request,
    res: Response
) => {
    try {
        const tasks = await getTasks();

        res.status(200).json({
            success: true,
            data: tasks,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const getOne = async (
    req: Request,
    res: Response
) => {
    try {
        const task = await getTaskById(
            Number(req.params.id)
        );

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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const update = async (
    req: Request,
    res: Response
) => {
    try {
        const task = await updateTask(
            Number(req.params.id),
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const remove = async (
    req: Request,
    res: Response
) => {
    try {
        await deleteTask(
            Number(req.params.id)
        );

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const myTasks = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const tasks = await getMyTasks(
            req.user.id
        );

        res.status(200).json({
            success: true,
            data: tasks,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

