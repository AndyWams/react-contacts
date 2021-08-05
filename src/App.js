import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";

class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsApi.getAll().then((contacts) => {
      console.log(contacts);

      this.setState(() => ({
        contacts,
      }));
    });
  }

  removeContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
    ContactsApi.remove(contact);
  };
  render() {
    return (
      <ListContacts
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    );
  }
}

export default App;
