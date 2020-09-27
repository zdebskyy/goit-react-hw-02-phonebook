import React, { Component } from "react";
import NameForm from "./NameForm";
import NumberForm from "./NumberForm";

export default class InputForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };
  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <NameForm onInputName={this.handleInput} value={name} />
        <NumberForm onInputNumber={this.handleNumber} value={number} />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
