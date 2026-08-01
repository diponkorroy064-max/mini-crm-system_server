"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const getDashboardStats = async () => {
    // User Statistics
    const totalUsers = await prisma_1.default.user.count();
    // Task Statistics
    const totalTasks = await prisma_1.default.task.count();
    const completedTasks = await prisma_1.default.task.count({
        where: {
            status: "COMPLETED",
        },
    });
    const pendingTasks = await prisma_1.default.task.count({
        where: {
            status: "PENDING",
        },
    });
    const inProgressTasks = await prisma_1.default.task.count({
        where: {
            status: "IN_PROGRESS",
        },
    });
    // Lead Statistics
    const totalLeads = await prisma_1.default.lead.count();
    const newLeads = await prisma_1.default.lead.count({
        where: {
            status: "NEW",
        },
    });
    const contactedLeads = await prisma_1.default.lead.count({
        where: {
            status: "CONTACTED",
        },
    });
    const qualifiedLeads = await prisma_1.default.lead.count({
        where: {
            status: "QUALIFIED",
        },
    });
    const proposalSentLeads = await prisma_1.default.lead.count({
        where: {
            status: "PROPOSAL_SENT",
        },
    });
    const wonLeads = await prisma_1.default.lead.count({
        where: {
            status: "WON",
        },
    });
    const lostLeads = await prisma_1.default.lead.count({
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
exports.getDashboardStats = getDashboardStats;
//# sourceMappingURL=dashboard.service.js.map