import { Request, Response } from "express";

import {
    createLeadSchema,
    updateLeadSchema,
} from "../validations/lead.validation";

import {
    createLead,
    getLeads,
    getLeadById,
    updateLead,
    deleteLead,
} from "../services/lead.service";

export const create = async (
    req: Request,
    res: Response
) => {
    try {
        const data = createLeadSchema.parse(req.body);

        const lead = await createLead(
            data,
            (req as any).user.id
        );

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead,
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
        const leads = await getLeads();

        res.status(200).json({
            success: true,
            data: leads,
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
        const lead = await getLeadById(
            Number(req.params.id)
        );

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            data: lead,
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
        const data = updateLeadSchema.parse(req.body);

        const lead = await updateLead(
            Number(req.params.id),
            data
        );

        res.status(200).json({
            success: true,
            message: "Lead updated successfully",
            data: lead,
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
        await deleteLead(
            Number(req.params.id)
        );

        res.status(200).json({
            success: true,
            message: "Lead deleted successfully",
        });

    } catch (error: any) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};
