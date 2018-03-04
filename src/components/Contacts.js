import React, { Component } from 'react';
import ContactsStore from "../store/ContactsStore";
import Form from './Form';

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: this.props.contacts,
            mountedForm:true
        }
        this.addContact = this.addContact.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    addContact(contact) {
        this.props.addContact(contact);
        this.setState({ mountedForm: false });
    }

    deleteContact(delContact, event) {
        event.preventDefault();
        ContactsStore.deleteContact(delContact);
        this.setState({
            contacts: this.props.contacts
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ mountedForm: true });
    }

    createContactCard(contact) {
        if(contact.phone[0] !== '+') {
            contact.phone = "+" + contact.phone;
        }

        return(
            <div key={contact.id} className="contact-card">
                <div className = 'contact-card-content'>
                    <input type = "submit" value = "Delete" className="button-delete" onClick = {this.deleteContact.bind(this, contact)} />
                    <h2>{contact.name}</h2>
                    <p>Phone: {contact.phone}</p>
                    <p>Email: {contact.email}</p>
                </div>
            </div>
        );
    }

    render() {
       return(
        <div>
        <ul className="header">
            {!this.state.mountedForm &&<input type="submit" value="Add contact" onClick = {this.handleSubmit} />}
            <li> Favorites </li>
        </ul>
        {this.state.mountedForm && <Form addContact={this.addContact} />}
        {!this.state.mountedForm && <div className="contacts"> 
            {this.state.contacts.map(this.createContactCard, this)} 
        </div>}
        </div>
       );      
    }
}

export default Contacts;