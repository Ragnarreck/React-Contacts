import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactsStore from '../store/ContactsStore'
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: ContactsStore.getAll(),
      lastIndex:0

    }
    this.addContact = this.addContact.bind(this);
    this.myContacts = this.state.contacts;
  }

  addContact(contact) {
    contact.id = this.state.lastIndex;
    this.setState({lastIndex: this.state.lastIndex+1});
    ContactsStore.addContact(contact);
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <Contacts addContact ={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
