import express from "express";
import Idea from "../models/Idea.js";

const router = express.Router();

/**
 * Build a dynamic AI prompt based on user skills
 * NO hard-coded MERN
 */
function buildPrompt(skills, level, goal) {
  return `
You are an expert software mentor.

Generate 3 ${level.toLowerCase()} level software project ideas.

Context:
- Skills: ${skills}
- Goal: ${goal}

Strict rules:
- Use ONLY technologies relevant to the given skills
- DO NOT mention MERN, MongoDB, Express, React, or Node.js unless they are explicitly included in the skills
- DO NOT repeat or restate skills, level, or goal in the output
- DO NOT include headings like "Here are the ideas"
- Each idea must follow this exact format:

Idea 1:
Title: <project title>
Description: <2–3 lines>
Features:
- feature 1
- feature 2
- feature 3

Idea 2:
...

Keep output clean and structured.
`;
}


// POST: Generate project ideas (AI)
router.post("/generate", async (req, res) => {
  console.log("POST /generate called");
  console.log("Body:", req.body);

  const { skills, level, goal } = req.body;

  if (!skills || !level || !goal) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const prompt = buildPrompt(skills, level, goal);

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",   // fast + good quality
        prompt,
        stream: false
      })
    });

    const data = await response.json();
    const ideasText = data.response;

    // Save to MongoDB
    await Idea.create({
      skills,
      level,
      goal,
      ideas: ideasText
    });

    res.json({ ideas: ideasText });

  } catch (error) {
    console.error("AI generation error:", error.message);
    res.status(500).json({ error: "AI generation failed" });
  }
});

// GET: Fetch history
router.get("/history", async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    console.error("HISTORY FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});


// DELETE: Clear history
router.delete("/history", async (req, res) => {
  try {
    await Idea.deleteMany({});
    res.json({ message: "History cleared" });
  } catch {
    res.status(500).json({ error: "Failed to clear history" });
  }
});

export default router;
