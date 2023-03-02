import React from "react";
import QRCode from "qrcode";
import FileSaver from "file-saver";

export default function Inputs({ type }) {
  const [result, setResult] = React.useState("");
  const [data, setData] = React.useState("undefined");
  const [options, setOptions] = React.useState({
    errorCorrectionLevel: "H",
    type: "image/jpeg",
    quality: 0.3,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
    width: 100,
  });

  function generateQRCode(e) {
    e.preventDefault();
    QRCode.toDataURL(data, options, function (err, url) {
      if (err) throw err;
      setResult(url);
    });
  }

  function saveQRCode() {
    FileSaver.saveAs(result, "image.jpg");
  }

  return (
    <form className="form_container" onSubmit={generateQRCode}>
      <div className="inputs__sections">
        <label htmlFor="input_url">Enter {type}: </label>
        {type === "URL" ? (
          <input
            id="input_url"
            className="primary__input"
            type="url"
            placeholder="https://"
            onChange={(e) => setData(e.target.value)}
            required
          />
        ) : (
          <input
            id="input_url"
            className="primary__input"
            type="text"
            placeholder="Enter Any Text"
            onChange={(e) => setData(e.target.value)}
            required
          />
        )}
      </div>

      <div className="inputs__sections">
        <label htmlFor="qr-size-select">QR Code Size: </label>
        <select
          id="qr-size-select"
          onChange={(e) =>
            setOptions((prevState) => ({
              ...prevState,
              width: e.target.value,
            }))
          }
        >
          <option defaultValue value="100">
            100x100
          </option>
          <option value="200">200x200</option>
          <option value="300">300x300</option>
          <option value="400">400x400</option>
          <option value="500">500x500</option>
          <option value="600">600x600</option>
          <option value="700">700x700</option>
        </select>
      </div>

      <div className="inputs__sections">
        <label htmlFor="darkModulePicker">QR Code Black Module: </label>
        <input
          type="color"
          id="darkModulePicker"
          value={options.color.dark}
          onChange={(e) =>
            setOptions((prevState) => ({
              ...prevState,
              color: {
                dark: e.target.value,
                light: prevState.color.light,
              },
            }))
          }
        />
      </div>

      <div className="inputs__sections">
        <label htmlFor="lightModulePicker">QR Code White Module: </label>
        <input
          type="color"
          id="lightModulePicker"
          value={options.color.light}
          onChange={(e) =>
            setOptions((prevState) => ({
              ...prevState,
              color: {
                dark: prevState.color.dark,
                light: e.target.value,
              },
            }))
          }
        />
      </div>

      <div className="qr-result-section">
        {result === "" ? null : <img src={result} alt="QRCode" />}
      </div>

      <button type="submit" className="button blue_button">
        Create QR Code
      </button>
      {result === "" ? null : (
        <button className="button green_button" onClick={saveQRCode}>
          Save
        </button>
      )}
    </form>
  );
}
