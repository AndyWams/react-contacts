import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";
import { Route } from "react-router-dom";
import CreateContacts from "./CreateContacts";

class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsApi.getAll().then((contacts) => {
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
  createContact = (contact) => {
    ContactsApi.create(contact).then((contact) => {
      console.log(contact);

      this.setState((prevState) => ({
        contacts: prevState.contacts.concat([contact]),
      }));
    });
  };
  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create-contact"
          render={({ history }) => (
            <CreateContacts
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
