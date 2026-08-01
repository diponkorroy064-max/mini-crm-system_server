import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";

export const createLead = async (
    data: Prisma.LeadCreateInput,
    adminId: number
) => {
    return await prisma.lead.create({
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

            ...(data.assignedTo && {
                assignedTo: data.assignedTo,
            }),
        },

        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};

export const getLeads = async () => {
    return await prisma.lead.findMany({
        include: {
            createdBy: true,
            assignedTo: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getLeadById = async (
    id: number
) => {
    return await prisma.lead.findUnique({
        where: { id },

        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};

export const updateLead = async (
    id: number,
    data: Prisma.LeadUpdateInput
) => {
    return await prisma.lead.update({
        where: { id },

        data,

        include: {
            createdBy: true,
            assignedTo: true,
        },
    });
};

export const deleteLead = async (
    id: number
) => {
    return await prisma.lead.delete({
        where: { id },
    });
};
