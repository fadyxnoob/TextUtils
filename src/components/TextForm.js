import React, { useState } from "react";

export default function TextForm(props) {
  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert('Converted to UpperCase', 'success : ')
  };
  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert('Converted to LowerCase', 'success : ')
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.alert('Text Cleared', 'success : ')
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
            <button disabled={text.length === 0} className="btn btn-primary" onClick={toUppercase}>
              toUppercase
            </button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={toLowercase}>
              toLowercase
            </button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clearText}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h3  className={`text-${props.mode==='white'?'black':'white'}`}>Your text summary</h3>
        <p  className={`text-${props.mode==='white'?'black':'white'}`}>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        <p  className={`text-${props.mode==='white'?'black':'white'}`}>{0.004 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to Read</p>
        <h2  className={`text-${props.mode==='white'?'black':'white'}`}>Preview</h2>
        <p  className={`px-2 py-2 border border-${props.mode==='white'?'black':'white'} text-${props.mode==='white'?'black':'white'}`}>{text=== ''?'Nothing to Preview':text}</p>
      </div>
    </>
  );
}
