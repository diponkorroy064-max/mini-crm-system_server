import prisma from "../config/prisma";

export const createTask = async (
    data: {
        title: string;
        description?: string;
        priority?: "LOW" | "MEDIUM" | "HIGH";
        status?: "PENDING" | "IN_PROGRESS" | "COMPLETED";
        dueDate?: string;
        assignedToId?: number;
    },
    adminId: number
) => {
    return await prisma.task.create({
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


export const getTasks = async () => {
    return await prisma.task.findMany({
        include: {
            assignedTo: true,
            createdBy: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
};


export const getTaskById = async (id: number) => {
    return await prisma.task.findUnique({
        where: {
            id,
        },

        include: {
            assignedTo: true,
            createdBy: true,
        },
    });
};

export const updateTask = async (
    id: number,
    data: any
) => {
    return await prisma.task.update({
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

export const deleteTask = async (id: number) => {
    return await prisma.task.delete({
        where: {
            id,
        },
    });
};


// for staff--
export const getMyTasks = async (
userId: number
) => {
    return await prisma.task.findMany({
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

