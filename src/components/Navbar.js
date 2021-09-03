import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode.theme} bg-${props.mode.theme} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  {props.a}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {props.b} 
                </Link>
              </li>
             
              
            </ul>
            <form className="d-flex flex-wrap">
              <div className="form-check form-check-inline">
                <input
                  onClick={props.togglerLight}
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="option4"
                />
                <label className="form-check-label" htmlFor="inlineRadio4">
                  Lightmode
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  onClick={props.togglerRed}
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Redmode
                </label>
              </div>
              <div  className="form-check form-check-inline">
                <input
                onClick={props.togglerBlue}
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                Bluemode
                </label>
              </div>
              <div  className="form-check form-check-inline">
                <input
                onClick={props.togglerGreen}
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                Greenmode
                </label>
              </div>

              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "enter Title",
  a: "first tab",
  b: "second tab",
  c: "third tab",
};
