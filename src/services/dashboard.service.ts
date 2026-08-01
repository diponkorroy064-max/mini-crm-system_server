import prisma from "../config/prisma";

export const getDashboardStats = async () => {
    // User Statistics
    const totalUsers = await prisma.user.count();

    // Task Statistics
    const totalTasks = await prisma.task.count();

    const completedTasks = await prisma.task.count({
        where: {
            status: "COMPLETED",
        },
    });

    const pendingTasks = await prisma.task.count({
        where: {
            status: "PENDING",
        },
    });

    const inProgressTasks = await prisma.task.count({
        where: {
            status: "IN_PROGRESS",
        },
    });

    // Lead Statistics
    const totalLeads = await prisma.lead.count();

    const newLeads = await prisma.lead.count({
        where: {
            status: "NEW",
        },
    });

    const contactedLeads = await prisma.lead.count({
        where: {
            status: "CONTACTED",
        },
    });

    const qualifiedLeads = await prisma.lead.count({
        where: {
            status: "QUALIFIED",
        },
    });

    const proposalSentLeads = await prisma.lead.count({
        where: {
            status: "PROPOSAL_SENT",
        },
    });

    const wonLeads = await prisma.lead.count({
        where: {
            status: "WON",
        },
    });

    const lostLeads = await prisma.lead.count({
        where: {
            status: "LOST",
        },
    });

    // Task Chart
    const taskChartData = [
        {
            name: "Pending",
            value: pendingTasks,
        },
        {
            name: "In Progress",
            value: inProgressTasks,
        },
        {
            name: "Completed",
            value: completedTasks,
        },
    ];

    // Lead Chart
    const leadChartData = [
        {
            name: "New",
            value: newLeads,
        },
        {
            name: "Contacted",
            value: contactedLeads,
        },
        {
            name: "Qualified",
            value: qualifiedLeads,
        },
        {
            name: "Proposal",
            value: proposalSentLeads,
        },
        {
            name: "Won",
            value: wonLeads,
        },
        {
            name: "Lost",
            value: lostLeads,
        },
    ];

    return {
        totalUsers,

        totalTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,

        totalLeads,
        newLeads,
        contactedLeads,
        qualifiedLeads,
        proposalSentLeads,
        wonLeads,
        lostLeads,

        taskChartData,
        leadChartData,
    };
};

