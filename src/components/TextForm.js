import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    // props.showAlert("converted to uppercase","success ");
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const handleLowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    // props.showAlert("converted to lowercase","success ");

  };
  const clearText=()=>{
    setText("");
    // props.showAlert("text has been cleared","success ");

  }

  const trimText = ()=>{
    let trimmed = text.trim();
    setText(trimmed);
    // props.showAlert("text has been trimmed","success ");

  }

  const copyText=()=>{
    const cpyText = document.getElementById('exampleFormControlTextarea1');
    navigator.clipboard.writeText(cpyText.value);
    props.showAlert("text is copied to clipboard","success ");

  }
  const removeExSpace=()=>{
    let Text = document.getElementById('exampleFormControlTextarea1');

   Text =  Text.value.replace(/\s+/g," ");
    setText(Text);

  }
  
  const [text, setText] = useState("");
  return (
    <>
      <div style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode,height:"100%"}}>
        <div className="container">

        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3 className="mt-3">{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={onChangeHandler}
            style={{backgroundColor:props.mode==='dark'?'white':'rgb(255 255 255 / 44%)',color:'black'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode}`} onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className={`btn btn-${props.mode} mx-3 `} onClick={handleLowClick}>
          convert to lowercase
        </button>
        <button className={`btn btn-${props.mode} `} onClick={clearText}>
          clear text
        </button>
        <button className={`btn btn-${props.mode} mx-3 `} onClick={trimText}>
          trim
        </button>
        <button className={`btn btn-${props.mode} `} onClick={copyText}>
          Copy Text
        </button>
        <button className={`btn btn-${props.mode} mx-3`} onClick={removeExSpace}>
          Remove extra spaces
        </button>
      

      <div className="container my-2" style={{color:props.mode}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
      </div>
   
    </>
  );
}
