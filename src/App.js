import React, { Component } from "react";
import SectionTitle from "./components/SectionTitle";
import InputForm from "./components/InputForm";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContatctLits";

export default class App extends Component {
  state = {
    contacts: [],
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });

    console.log(this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <SectionTitle title="PhoneBook">
          <InputForm onAddContact={this.addContact} />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <ContactList contacts={contacts} />
        </SectionTitle>
      </div>
    );
  }
}
