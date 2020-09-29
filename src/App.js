import React, { Component } from "react";
import SectionTitle from "./components/SectionTitle";
import InputForm from "./components/InputForm";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContatctLits";
import Filter from "./components/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
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
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const sortedContacts = this.getFilteredContacts();
    return (
      <div>
        <SectionTitle title="PhoneBook">
          <InputForm onAddContact={this.addContact} allContacts={contacts} />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={sortedContacts}
            onRemoveContact={this.removeContact}
          />
        </SectionTitle>
      </div>
    );
  }
}
