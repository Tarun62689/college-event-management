import express from "express";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mount routes
app.use("/events", eventRoutes);
app.use("/students", studentRoutes);
app.use("/reports", reportRoutes);

// Health check
app.get("/", (req, res) => {
  res.send(" College Event Management API running");
});

export default app;
