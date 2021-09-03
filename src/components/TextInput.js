import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Textinput.css";

export default function TextInput(props) {
  const [text, setText] = useState(props.a);

  const Uppercase = () => {
    var updatedText = text.toUpperCase();
    setText(updatedText);
    props.showAlert("Text formatted to Upper case","success","warning")
  };
  const Lowercase = () => {
    var updatedText = text.toLowerCase();
    setText(updatedText);
    props.showAlert("Text formatted to Lower case","success","danger")
  };
  const handleText = (event) => {
    setText(event.target.value);
  };
  const  Copy=()=> {
    let textarea = document.getElementById("mytext");
    textarea.select();
    document.execCommand("copy");
    props.showAlert("Text Copied to Clipboard","success","success")
  }
  const  ClearText=()=> {
    setText("")
    props.showAlert("Text Cleared","success","warning")
  }
  const  extraSpace=()=> {
    var updatedText = text.replace(/  +/g, ' ')
    setText(updatedText);
    props.showAlert("extra spaces removed","success","success")
  }
  var btnColor =""
if(props.mode.color==="white"){
 btnColor = ""
}else if(props.mode.color==="#003154"){
   btnColor = "#003154"

}else if(props.mode.color==="#690000"){
   btnColor = "#690000"

}else if(props.mode.color==="#00350c"){
   btnColor = "#00350c"

}


  return (
    <>
      <div className="container my-5">
        <div className="my-3">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            id="mytext"
            rows="8"
            value={text}
            onChange={handleText}
          ></textarea>
          <button disabled={text.length===0} style={{backgroundColor:btnColor,border:"solid 1px white"}} className="btn btn-primary m-2 " onClick={Uppercase}>
            UpperCase
          </button>
          <button disabled={text.length===0}  style={{backgroundColor:btnColor,border:"solid 1px white"}} className="btn btn-primary m-2" onClick={Lowercase}>
            LowerCase
          </button>
          <button disabled={text.length===0} style={{backgroundColor:btnColor,border:"solid 1px white"}} className="btn btn-primary m-2" onClick={Copy}>
            CopyText
          </button>
          <button disabled={text.length===0} style={{backgroundColor:btnColor,border:"solid 1px white"}} className="btn btn-primary m-2" onClick={ClearText}>
            ClearText
          </button>
          <button disabled={text.length===0} style={{backgroundColor:btnColor,border:"solid 1px white"}} className="btn btn-primary m-2" onClick={extraSpace}>
            clear Extra space
          </button>
        </div>
      </div>
      <div className="container outer my-3">
        <div className="inner1">
         

          <h2 style={{ color: props.mode.theme === "dark" ? "yellow":"black"  }}>
            Your Text Summary
          </h2>
          <p>
         
          
          
           {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
          </p>
        

          <p>read time - {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</p>
          <h3 style={{ color: props.mode.theme === "dark" ? "yellow":"black"  }}>
            Preview
          </h3>
          <p>{text.length > 0 ? text : "enter some text to preview"}</p>
        </div>
      </div>
    </>
  );
}
TextInput.propTypes = {
  heading: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired,
};
TextInput.defaultProps = {
  heading: "enter you text",
  a: "hello world",
};
