"use client";

import { useState } from "react";

export default function Home() {
  const [module, setModule] = useState("routines");
  const [category, setCategory] = useState("daily");
  const [subcategory, setSubcategory] = useState("morning");
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(null);

  async function sendRequest() {
    const res = await fetch("/api/engine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module,
        category,
        subcategory,
        user_input: userInput
      })
    });

    const data = await res.json();
    setResponse(data);
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>+os infinite — Engine Test</h1>

      <div style={{ marginTop: 20 }}>
        <label>Module:</label>
        <select value={module} onChange={(e) => setModule(e.target.value)}>
          <option value="routines">routines</option>
          <option value="memory">memory</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="daily">daily</option>
          <option value="project">project</option>
          <option value="general">general</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Subcategory:</label>
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="morning">morning</option>
          <option value="evening">evening</option>
          <option value="diy">diy</option>
          <option value="work">work</option>
          <option value="emotional">emotional</option>
          <option value="lists">lists</option>
          <option value="calendar">calendar</option>
          <option value="reminders">reminders</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>User Input:</label>
        <textarea
          rows="4"
          style={{ width: "100%" }}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>

      <button
        onClick={sendRequest}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Send to Engine
      </button>

      {response && (
        <pre
          style={{
            marginTop: 30,
            padding: 20,
            background: "#f0f0f0",
            borderRadius: 8
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}