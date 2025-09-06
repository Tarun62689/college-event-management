import { Router } from "express";
import {
  eventPopularity,
  attendanceReport,
  feedbackReport,
  studentParticipation
} from "../controllers/reportController.js";

const router = Router();

console.log("Report routes loaded");

router.get("/events/popularity", (req, res) => {
  console.log("📊 Popularity endpoint hit");
  eventPopularity(req, res);
});
router.get("/events/attendance", (req, res) => {
  console.log("📊 Attendance endpoint hit");
  attendanceReport(req, res);
});
router.get("/events/feedback", (req, res) => {
  console.log("📊 Feedback endpoint hit");
  feedbackReport(req, res);
});
router.get("/students/participation", (req, res) => {
  console.log("📊 Participation endpoint hit");
  studentParticipation(req, res);
});

export default router;
