"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = void 0;
const authorizeRoles = (...roles) => (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
    if (!roles.includes(user.role)) {
        return res.status(403).json({
            success: false,
            message: "Forbidden: You don't have permission.",
        });
    }
    next();
};
exports.authorizeRoles = authorizeRoles;
//# sourceMappingURL=role.middleware.js.map