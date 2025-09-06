import express from "express";
import {
  getAllEvents,
  addEvent,
  getAllRegistrations,
  getAllStudents,
  getAllColleges,
  addCollege,
} from "../controllers/adminController.js";

const router = express.Router();

// Events
router.get("/events", getAllEvents);
router.post("/events", addEvent);

// Registrations
router.get("/registrations", getAllRegistrations);

// Students
router.get("/students", getAllStudents);

// Colleges
router.get("/colleges", getAllColleges);
router.post("/colleges", addCollege);

export default router;
