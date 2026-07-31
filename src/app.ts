import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.route";
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



















export default app;
