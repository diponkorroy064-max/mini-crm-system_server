"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getOne = exports.getAll = exports.create = void 0;
const lead_validation_1 = require("../validations/lead.validation");
const lead_service_1 = require("../services/lead.service");
const create = async (req, res) => {
    try {
        const data = lead_validation_1.createLeadSchema.parse(req.body);
        const lead = await (0, lead_service_1.createLead)(data, req.user.id);
        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead,
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
        const leads = await (0, lead_service_1.getLeads)();
        res.status(200).json({
            success: true,
            data: leads,
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
        const lead = await (0, lead_service_1.getLeadById)(Number(req.params.id));
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
        const data = lead_validation_1.updateLeadSchema.parse(req.body);
        const lead = await (0, lead_service_1.updateLead)(Number(req.params.id), data);
        res.status(200).json({
            success: true,
            message: "Lead updated successfully",
            data: lead,
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
        await (0, lead_service_1.deleteLead)(Number(req.params.id));
        res.status(200).json({
            success: true,
            message: "Lead deleted successfully",
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
//# sourceMappingURL=lead.controller.js.map