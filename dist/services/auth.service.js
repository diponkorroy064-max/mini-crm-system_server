"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const hashPassword_1 = require("../utils/hashPassword");
const comparePassword_1 = require("../utils/comparePassword");
const generateToken_1 = require("../utils/generateToken");
const registerUser = async (payload) => {
    // Check if email already exists
    const existingUser = await prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    // Hash password
    const hashedPassword = await (0, hashPassword_1.hashPassword)(payload.password);
    // Save user
    const user = await prisma_1.default.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            // role: "STAFF",
        },
    });
    // Don't return password
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
exports.registerUser = registerUser;
const loginUser = async (payload) => {
    const user = await prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordMatched = await (0, comparePassword_1.comparePassword)(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid email or password");
    }
    const token = (0, generateToken_1.generateToken)({
        id: user.id,
        email: user.email,
        role: user.role,
    });
    const { password, ...userWithoutPassword } = user;
    return {
        token,
        user: userWithoutPassword,
    };
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map