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
    if (mode.color !== "#003154") {
      setmode({
        theme : "dark",
        color : "#003154"
      });
      document.body.style.backgroundColor = "#003154";
      document.body.style.color = "white";
      showAlert("Blue mode enabled", "success", "success");
    }
  };
  const toggleModeRed = () => {
    if (mode.color !== "#690000") {
      setmode({
        theme : "dark",
        color : "#690000"
      });
      document.body.style.backgroundColor = "#690000";
      document.body.style.color = "white";
      showAlert("Red mode enabled", "success", "success");
    }
  };
  const toggleModeGreen = () => {
    if (mode.color !== "#00350c") {
      setmode({
        theme : "dark",
        color : "#00350c"
      });
      document.body.style.backgroundColor = "#00350c";
      document.body.style.color = "white";
      showAlert("Green mode enabled", "success", "success");
    }
  };

  return (
    <>
   <Router>
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
      <Switch>
        <Route exact path="/about" >
          <About mode={mode}/>
      </Route>
         
          
          <Route exact path="/">
          <TextInput
        heading="enter your text to analyze"
        a=""
        mode={mode}
        showAlert={showAlert}
      />
     </Route>
     </Switch>
     </Router>      
    </>
  );
}

export default App;
