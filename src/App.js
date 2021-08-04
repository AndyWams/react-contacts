import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
      {
        id: 'michael',
        name: 'Michael Smith',
        handle: 'mikey',
        avatarURL: 'http://localhost:5001/michael.jpg',
      },
      {
        id: 'ryan',
        name: 'Ryan Joe',
        handle: 'ryanjoe',
        avatarURL: 'http://localhost:5001/ryan.jpg',
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: 'tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg',
      },
    ],
  }

  removeContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => {
        return c.id !== contact.id
      }),
    }))
  }
  render() {
    return (
      <ListContacts
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    )
  }
}

export default App
