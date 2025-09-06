import express from "express";
import cors from "cors";

// Routes
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // 🔹 Student & Admin auth
import adminRoutes from "./routes/adminRoutes.js";
import { verifyAdmin } from "./Middleware/verifyAdmin.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/auth", authRoutes);       // Student & Admin auth routes
app.use("/events", eventRoutes);
app.use("/students", studentRoutes);
app.use("/reports", reportRoutes);
app.use("/admin", verifyAdmin, adminRoutes);


// Health check
app.get("/", (req, res) => {
  res.send("College Event Management API running ✅");
});

export default app;
