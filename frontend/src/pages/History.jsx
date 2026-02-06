import { useEffect, useState } from "react";
import { parseIdeas } from "../utils/parseIdeas";

export default function History() {
  const [items, setItems] = useState([]);

  // Fetch history
  const fetchHistory = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/ai/history");
      if (!res.ok) throw new Error("Failed to fetch history");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("History fetch error:", err);
      setItems([]);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Clear history
  const clearHistory = async () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all history?"
    );
    if (!confirmClear) return;

    try {
      await fetch("http://localhost:5000/api/ai/history", {
        method: "DELETE"
      });
      setItems([]);
    } catch (err) {
      console.error("Clear history failed:", err);
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="page-header history-header">
        <div>
          <h2>Generation History</h2>
          <p>Previously generated project ideas</p>
        </div>

        <button
          className="clear-btn"
          onClick={clearHistory}
          disabled={items.length === 0}
        >
          Clear History
        </button>
      </div>

      {/* NO HISTORY */}
      {items.length === 0 && (
        <div className="card">No history available yet.</div>
      )}

      {/* HISTORY ITEMS */}
      {items.map((entry) => {
        const ideas = parseIdeas(entry.ideas || "");

        return (
          <div key={entry._id} className="card history-outer">
            {/* INPUT BOX */}
            <div className="history-input-box">
              <span><strong>Skills:</strong> {entry.skills}</span>
              <span><strong>Level:</strong> {entry.level}</span>
              <span><strong>Goal:</strong> {entry.goal}</span>
            </div>

            {/* IDEAS */}
            {ideas.length > 0 ? (
              <div className="history-ideas-box">
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
            ) : (
              <div className="card">
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {entry.ideas}
                </pre>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
