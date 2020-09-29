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
    const contactName = this.props.allContacts.map((el) => {
      return el.name;
    });
    const validation = contactName.find((el) => el === this.state.name);

    validation === this.state.name
      ? alert("This contact name already exist")
      : this.props.onAddContact(this.state);

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
