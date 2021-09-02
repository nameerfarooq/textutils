import Navbar from "./components/Navbar";
import "./App.css";
import TextInput from "./components/TextInput";
import About from './components/About';
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState({
    theme : "light",
    color : "white"
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, alertColor) => {
    setAlert({
      msg: message,
      type: type,
      alertColor: alertColor,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeLight = () => {
    if (mode.color !== "white") {
      setmode({
        theme : "light",
        color : "white"
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success", "success");
    }
  };
  const toggleModeBlue = () => {
    if (mode.color !== "blue") {
      setmode({
        theme : "dark",
        color : "blue"
      });
      document.body.style.backgroundColor = "#003154";
      document.body.style.color = "white";
      showAlert("Blue mode enabled", "success", "success");
    }
  };
  const toggleModeRed = () => {
    if (mode.color !== "red") {
      setmode({
        theme : "dark",
        color : "red"
      });
      document.body.style.backgroundColor = "#690000";
      document.body.style.color = "white";
      showAlert("Red mode enabled", "success", "success");
    }
  };
  const toggleModeGreen = () => {
    if (mode.color !== "green") {
      setmode({
        theme : "dark",
        color : "green"
      });
      document.body.style.backgroundColor = "#00350c";
      document.body.style.color = "white";
      showAlert("Green mode enabled", "success", "success");
    }
  };

  return (
    <>
   
      <Navbar
        title="TextUtils"
        a="About"
        b="Text"
        c="FollowUs"
        mode={mode}
        togglerLight={toggleModeLight}
        togglerBlue={toggleModeBlue}
        togglerRed={toggleModeRed}
        togglerGreen={toggleModeGreen}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      
         
          
          
          <TextInput
        heading="enter your text to analyze"
        a=""
        mode={mode}
        showAlert={showAlert}
      />
     
          
      
    </>
  );
}

export default App;
