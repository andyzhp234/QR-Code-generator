import React from "react";

export default function Selections({ type, setType }) {
  return (
    <div className="selections">
      <h2
        onClick={() => setType("URL")}
        style={{ color: type === "URL" ? "red" : "" }}
      >
        URL
      </h2>
      <h2
        style={{ color: type === "TEXT" ? "red" : "" }}
        onClick={() => setType("TEXT")}
      >
        TEXT
      </h2>
    </div>
  );
}
