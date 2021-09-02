import React from "react";
import './Navbar.css'

export default function Alert(props) {
  return (
    props.alert && (
      <div className="container alertUpper">
        <div
          className={`alert alert-${props.alert.alertColor} " role="alert  fade show fixed-top alertIMP`}
        >
          <strong>
            {props.alert.type.charAt(0).toUpperCase() +
              props.alert.type.slice("1")}
          </strong>{" "}
          {props.alert.msg}
        </div>
      </div>
    )
  );
}
