"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const lead_route_1 = __importDefault(require("./routes/lead.route"));
const dashboard_route_1 = __importDefault(require("./routes/dashboard.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});
// Auth APIs
app.use("/api/auth", auth_routes_1.default);
// Task APIs
app.use("/api/tasks", task_route_1.default);
// Lead APIs
app.use("/api/leads", lead_route_1.default);
// Dashboard APIs
app.use("/api/dashboard", dashboard_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map