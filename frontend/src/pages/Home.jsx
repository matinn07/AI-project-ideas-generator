import { useState } from "react";
import { parseIdeas } from "../utils/parseIdeas";

export default function Home() {
  const [skills, setSkills] = useState("");
  const [level, setLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [ideas, setIdeas] = useState([]);
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    if (!skills || !level || !goal) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setIdeas([]);
    setRawText("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills, level, goal })
      });

      const data = await res.json();

      const parsed = parseIdeas(data.ideas);

      if (parsed.length > 0) {
        setIdeas(parsed);
      } else {
        // fallback – show raw AI output
        setRawText(data.ideas);
      }
    } catch (err) {
      alert("Failed to generate ideas");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="page-header">
        <h2>Generate Project Ideas</h2>
        <p>AI-generated project ideas based on your skills</p>
      </div>

      <div className="card form-card">
        <input
          placeholder="Skills (Java, Python, React, etc.)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          placeholder="Experience Level (Beginner)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          placeholder="Goal (Job / Internship)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <button onClick={generateIdeas} disabled={loading}>
          {loading ? "Generating..." : "Generate Ideas"}
        </button>
      </div>

      {/* Parsed structured ideas */}
      {ideas.length > 0 && (
        <div className="ideas-grid">
          {ideas.map((idea, index) => (
            <div key={idea.id} className="idea-wrapper">
              <div className="idea-index">Idea {index + 1}</div>
              <div className="idea-card">
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>

                {idea.features.length > 0 && (
                  <ul>
                    {idea.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Raw fallback output */}
      {rawText && (
        <div className="card">
          <h3>AI Output</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{rawText}</pre>
        </div>
      )}
    </>
  );
}
