"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLead = exports.updateLead = exports.getLeadById = exports.getLeads = exports.createLead = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createLead = async (data, adminId) => {
    return await prisma_1.default.lead.create({
        data: {
            customerName: data.customerName,
            email: data.email,
            phone: data.phone,
            company: data.company,
            source: data.source,
            status: data.status ?? "NEW",
            notes: data.notes,
            createdBy: {
                connect: {
                    id: adminId,
                },
            },
            ...(data.assignedToId && {
                assignedTo: {
                    connect: {
                        id: data.assignedToId,
                    },
                },
            }),
        },
        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};
exports.createLead = createLead;
const getLeads = async () => {
    return await prisma_1.default.lead.findMany({
        include: {
            createdBy: true,
            assignedTo: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getLeads = getLeads;
const getLeadById = async (id) => {
    return await prisma_1.default.lead.findUnique({
        where: { id },
        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};
exports.getLeadById = getLeadById;
const updateLead = async (id, data) => {
    return await prisma_1.default.lead.update({
        where: { id },
        data,
        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};
exports.updateLead = updateLead;
const deleteLead = async (id) => {
    return await prisma_1.default.lead.delete({
        where: { id },
    });
};
exports.deleteLead = deleteLead;
//# sourceMappingURL=lead.service.js.map