import React, { Component } from "react";
import "./Button.css";
import {
  array,
  string,
  bool,
  func,
  oneOf,
  number,
  oneOfType,
  shape,
  arrayOf,
  object,
  any
} from "prop-types";

class Button extends Component {
  static propTypes = {
    children: any,
    danger: bool,
    info: bool,
    success: bool,
    onClick: func
  };
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
isDisabled = true;
  render() {
    return (
      <div
        className={`button ${
          this.isOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
        isDisabled
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
