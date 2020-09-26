import React, { Component } from "react";

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
  handleInput = (e) => {
    this.setState({ name: e.target.value });
  };
  handleNumber = (e) => {
    this.setState({ number: e.target.value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            placeholder="Enter name"
            type="text"
            value={name}
            onChange={this.handleInput}
            name="text"
          ></input>
        </label>
        <label>
          Number
          <input
            placeholder="Enter number"
            type="number"
            value={number}
            onChange={this.handleNumber}
            name="number"
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
