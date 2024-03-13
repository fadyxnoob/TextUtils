import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleText = (e) => {
    setText(e.target.value)
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`mb-3 container bg-${props.mode} text-${props.mode==='white'?'white':'black'} p-3`}>
        <h2 className={`text-${props.mode==='white'?'black':'white'}`}>{props.heading}</h2>
        <textarea className={`form-control  bg-${props.mode} text-${props.mode==='black'?'white':'black'}`} value={text} rows="5" onChange={handleText}>
        </textarea>
        <div className="row  m-0 mt-3 border rounded p-2">
          <div className="col p-0">
            <button className="btn btn-primary" onClick={toUppercase}>
              toUppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={toLowercase}>
              toLowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={clearText}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h3  className={`text-${props.mode==='white'?'black':'white'}`}>Your text summary</h3>
        <p  className={`text-${props.mode==='white'?'black':'white'}`}>{text.split(" ").length} words and {text.length} characters</p>
        <p  className={`text-${props.mode==='white'?'black':'white'}`}>{0.004 * text.split(" ").length} Minutes to Read</p>
        <h2  className={`text-${props.mode==='white'?'black':'white'}`}>Preview</h2>
        <p  className={`px-2 py-2 border border-${props.mode==='white'?'black':'white'} text-${props.mode==='white'?'black':'white'}`}>{text=== ''?'Enter Text to Preview':text}</p>
      </div>
    </>
  );
}