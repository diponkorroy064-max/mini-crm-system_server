"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.login = exports.register = void 0;
const auth_validation_1 = require("../validations/auth.validation");
const auth_service_1 = require("../services/auth.service");
const auth_validation_2 = require("../validations/auth.validation");
const auth_service_2 = require("../services/auth.service");
const register = async (req, res) => {
    try {
        const data = auth_validation_1.registerSchema.parse(req.body);
        const user = await (0, auth_service_1.registerUser)(data);
        res.status(201).json({
            success: true,
            message: "Registration successful",
            data: user,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const data = auth_validation_2.loginSchema.parse(req.body);
        const result = await (0, auth_service_2.loginUser)(data);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.login = login;
const getProfile = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user: req.user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
exports.getProfile = getProfile;
//# sourceMappingURL=auth.controller.js.map