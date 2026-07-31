"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = void 0;
const authorizeRoles = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({
            success: false,
            message: "Forbidden: You don't have permission.",
        });
    }
    next();
};
exports.authorizeRoles = authorizeRoles;
//# sourceMappingURL=role.middleware.js.map