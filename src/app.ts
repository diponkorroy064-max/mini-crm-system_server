import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.route";
import leadRoutes from "./routes/lead.route";
import dashboardRoutes from "./routes/dashboard.route";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

// Auth APIs
app.use("/api/auth", authRoutes);

// Task APIs
app.use("/api/tasks", taskRoutes);

// Lead APIs
app.use("/api/leads", leadRoutes);

// Dashboard APIs
app.use("/api/dashboard", dashboardRoutes);








export default app;
