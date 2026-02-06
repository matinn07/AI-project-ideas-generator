export default function About() {
  return (
    <>
      <div className="page-header">
        <h2>About This Project</h2>
        <p>Project overview, development flow, and technical explanation</p>
      </div>

      {/* STUDENT INFO */}
      <div className="card about-card">
        <h3>Student Details</h3>
        <p><strong>Name:</strong> Mati Raheman Nadaf</p>
        <p><strong>USN:</strong> ENG22CS0102</p>
        <p><strong>Project Type:</strong> AI-powered Full Stack Web Application</p>
      </div>

      {/* PROJECT IDEA */}
      <div className="card about-card">
        <h3>Why I Built This Project</h3>
        <p>
          Many students struggle to decide which project to build based on their
          skills and career goals. Most platforms suggest generic or fixed-stack
          ideas.
        </p>
        <p>
          This project solves that problem by using <strong>Artificial Intelligence</strong> 
          to generate <strong>custom project ideas</strong> based on:
        </p>
        <ul>
          <li>User skills (Java, Python, React, etc.)</li>
          <li>Experience level</li>
          <li>Career goal (Job / Internship)</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="card about-card">
        <h3>Technologies Used</h3>
        <ul>
          <li><strong>Frontend:</strong> React (Vite)</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>AI Model:</strong> LLaMA 3 (via Ollama – local AI)</li>
        </ul>
      </div>

      {/* PROJECT FLOW */}
      <div className="card about-card">
        <h3>Step-by-Step Working of the Project</h3>

        <h4>1. User Input (Frontend)</h4>
        <p>
          The user enters skills, experience level, and goal on the Home page.
          React manages these inputs using state.
        </p>

        <h4>2. API Request</h4>
        <p>
          On clicking <strong>Generate</strong>, the frontend sends a POST request
          to the backend API using <code>fetch()</code>.
        </p>

        <h4>3. Backend Processing</h4>
        <p>
          The backend receives the request, builds a dynamic AI prompt based on
          the user input, and sends it to the AI model.
        </p>

        <h4>4. AI Generation</h4>
        <p>
          A local AI model (LLaMA 3 via Ollama) generates project ideas that match
          the user’s skills. No hard-coded tech stack is enforced.
        </p>

        <h4>5. Database Storage</h4>
        <p>
          The generated ideas, along with input details, are stored in MongoDB
          for future reference.
        </p>

        <h4>6. Response to Frontend</h4>
        <p>
          The backend sends the AI output back to the frontend, where it is
          formatted and displayed in structured cards.
        </p>

        <h4>7. History Page</h4>
        <p>
          The History page fetches saved records from MongoDB and displays them.
          Users can also clear history using a delete API.
        </p>
      </div>

      {/* INTERVIEW */}
      <div className="card about-card">
        <h3>How This Project Is Interview-Ready</h3>
        <ul>
          <li>Demonstrates full-stack development</li>
          <li>Uses real AI integration (not mock data)</li>
          <li>Dynamic prompt engineering</li>
          <li>Clean separation of frontend and backend</li>
          <li>Error handling and fallback rendering</li>
        </ul>
      </div>

      {/* QUESTIONS */}
      <div className="card about-card">
        <h3>Questions I Can Answer in an Interview</h3>
        <ul>
          <li>How frontend and backend communicate</li>
          <li>How AI prompts are dynamically generated</li>
          <li>Why local AI was used instead of paid APIs</li>
          <li>How MongoDB stores and retrieves history</li>
          <li>How errors are handled in AI responses</li>
        </ul>
      </div>
      {/* STEP BY STEP BUILD EXPLANATION */}
<div className="card about-card">
  <h3>Step-by-Step Development Explanation</h3>

  <p>
    This project was built in a structured manner by dividing it into frontend,
    backend, AI integration, and database layers.
  </p>

  <h4>Step 1: Idea and Problem Identification</h4>
  <p>
    I identified that students often struggle to choose projects based on their
    skills and career goals. This project solves that by using AI to generate
    personalized project ideas.
  </p>

  <h4>Step 2: Project Structure</h4>
  <p>
    The project is divided into frontend and backend folders to maintain clean
    separation of concerns and scalability.
  </p>

  <h4>Step 3: Frontend Development</h4>
  <p>
    I used React with Vite to build a responsive UI. The frontend collects user
    inputs and displays AI-generated results using reusable components.
  </p>

  <h4>Step 4: Backend Development</h4>
  <p>
    Node.js and Express were used to create APIs that handle AI generation,
    database storage, and history management.
  </p>

  <h4>Step 5: AI Integration</h4>
  <p>
    A local LLaMA 3 AI model was integrated using Ollama. The backend dynamically
    builds prompts based on user inputs and sends them to the AI model.
  </p>

  <h4>Step 6: Data Storage</h4>
  <p>
    MongoDB stores generated ideas along with input details. This enables the
    History feature and data persistence.
  </p>

  <h4>Step 7: History & Management</h4>
  <p>
    A History page fetches stored records and displays them in a clean layout.
    Users can clear history using a delete API.
  </p>

  <h4>Step 8: Error Handling & Stability</h4>
  <p>
    The project includes fallback rendering, API error handling, and loading
    states to ensure a smooth user experience.
  </p>

  <h4>Step 9: Final Review</h4>
  <p>
    The project was tested end-to-end to ensure AI generation, database storage,
    and UI rendering work together seamlessly.
  </p>
</div>

    </>
  );
}
