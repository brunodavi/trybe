import React, { Component } from "react";
import "./Form.css";
import Info from "./Info";
import Text from "./Text";
import Extras from "./Extras";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <Text handleChange={this.handleChange} />
          <Info handleChange={this.handleChange} />
          <Extras handleChange={this.handleChange} />
          </form>
      </div>
    );
  }
}

export default Form;
