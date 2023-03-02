import React from "react";
import "../css/app.css";
import Selections from "./Selections";
import Inputs from "./Inputs";

export default function App() {
  const [type, setType] = React.useState("URL");

  return (
    <div className="app">
      <h1 className="title">QR Code Generator</h1>
      <div className="container">
        <Selections type={type} setType={setType} />
        <Inputs type={type} />
      </div>
    </div>
  );
}
