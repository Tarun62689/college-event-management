import supabase from "../config/supabaseClient.js";

// Student Registration (Sign Up)
export const studentRegister = async (req, res) => {
  const { email, password, student_name, college_id, usn, department, year, phone } = req.body;

  // Create user in Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password
  });

  if (authError) return res.status(400).json({ error: authError.message });

  const user = authData.user;

  // Insert student profile into "students" table
  const { data: studentData, error: studentError } = await supabase
    .from("students")
    .insert([{
      auth_id: user.id,         // UUID from Supabase Auth
      student_name,
      college_id,
      usn,
      department,
      year,
      phone
    }])
    .select();

  if (studentError) return res.status(400).json({ error: studentError.message });

  res.json({
    message: "Student registered successfully",
    user: { id: user.id, email: user.email },
    profile: studentData
  });
};

// Student Login
export const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({
    message: "Login successful",
    session: data.session
  });
};

// Get Profile
export const getProfile = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error) return res.status(401).json({ error: error.message });

  // Fetch student profile from students table using auth_id
  const { data: studentData, error: studentError } = await supabase
    .from("students")
    .select("*")
    .eq("auth_id", user.id)
    .single();

  if (studentError) return res.status(400).json({ error: studentError.message });

  res.json({ auth: user, profile: studentData });
};
