import supabase from "../config/supabaseClient.js";

// ----------------- EVENTS -----------------

// Get all events
export const getAllEvents = async (req, res) => {
  const { data, error } = await supabase.from("events").select(`
    event_id,
    event_name,
    event_type,
    event_date,
    colleges (college_name)
  `);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Add a new event
export const addEvent = async (req, res) => {
  const { college_id, event_name, event_type, event_date } = req.body;

  const { data, error } = await supabase
    .from("events")
    .insert([{ college_id, event_name, event_type, event_date }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Event added successfully", event: data[0] });
};

// ----------------- REGISTRATIONS -----------------

// Get all registrations with joined student and event info
export const getAllRegistrations = async (req, res) => {
  const { data, error } = await supabase
    .from("registrations")
    .select(`
      reg_id,
      attendance,
      feedback,
      students (
        student_name, usn, department, year, phone
      ),
      events (
        event_name, event_type, event_date,
        colleges (college_name)
      )
    `);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// ----------------- STUDENTS -----------------

// Get all students
export const getAllStudents = async (req, res) => {
  const { data, error } = await supabase
    .from("students")
    .select(`
      student_id,
      student_name,
      usn,
      department,
      year,
      phone,
      colleges (college_name)
    `);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// ----------------- COLLEGES -----------------

// Get all colleges
export const getAllColleges = async (req, res) => {
  const { data, error } = await supabase.from("colleges").select("*");

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Add a new college
export const addCollege = async (req, res) => {
  const { college_name, location, description } = req.body;

  const { data, error } = await supabase
    .from("colleges")
    .insert([{ college_name, location, description }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "College added successfully", college: data[0] });
};
