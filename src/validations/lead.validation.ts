import { z } from "zod";

export const createLeadSchema = z.object({
    customerName: z
        .string()
        .min(2, "Customer name is required"),

    email: z
        .string()
        .email("Invalid email address"),

    phone: z
        .string()
        .min(5, "Phone number is required"),

    company: z
        .string()
        .optional(),

    source: z.enum([
        "WEBSITE",
        "FACEBOOK",
        "INSTAGRAM",
        "LINKEDIN",
        "REFERRAL",
        "PHONE",
        "EMAIL",
        "OTHER",
    ]),

    status: z
        .enum([
            "NEW",
            "CONTACTED",
            "QUALIFIED",
            "PROPOSAL_SENT",
            "WON",
            "LOST",
        ])
        .optional(),

    notes: z
        .string()
        .optional(),

    assignedToId: z
        .number()
        .optional(),
});

export const updateLeadSchema =
    createLeadSchema.partial();
    