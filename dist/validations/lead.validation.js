"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeadSchema = exports.createLeadSchema = void 0;
const zod_1 = require("zod");
exports.createLeadSchema = zod_1.z.object({
    customerName: zod_1.z
        .string()
        .min(2, "Customer name is required"),
    email: zod_1.z
        .string()
        .email("Invalid email address"),
    phone: zod_1.z
        .string()
        .min(5, "Phone number is required"),
    company: zod_1.z
        .string()
        .optional(),
    source: zod_1.z.enum([
        "WEBSITE",
        "FACEBOOK",
        "INSTAGRAM",
        "LINKEDIN",
        "REFERRAL",
        "PHONE",
        "EMAIL",
        "OTHER",
    ]),
    status: zod_1.z
        .enum([
        "NEW",
        "CONTACTED",
        "QUALIFIED",
        "PROPOSAL_SENT",
        "WON",
        "LOST",
    ])
        .optional(),
    notes: zod_1.z
        .string()
        .optional(),
    assignedToId: zod_1.z
        .number()
        .optional(),
});
exports.updateLeadSchema = exports.createLeadSchema.partial();
//# sourceMappingURL=lead.validation.js.map