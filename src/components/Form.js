import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                phone: '',
                email: ''
            }
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    handleChangeName(event) {
        event.preventDefault();
        this.setState({
            contact: {
                email:this.state.contact.email,
                name: event.target.value,
                phone:this.state.contact.phone
            }
        });
    }

    handleChangePhone(event) {
        event.preventDefault();
        this.setState({
            contact: {
                email:this.state.contact.email,
                name: this.state.contact.name,
                phone:event.target.value
            }
        });
    }

    handleChangeEmail(event) {
        event.preventDefault();
        this.setState({
            contact: {
                email:event.target.value,
                name: this.state.contact.name,
                phone:this.state.contact.phone
            }
        });
    }

    addContact(event) {
        event.preventDefault();
        this.props.addContact(this.state.contact);
        this.setState({
            contact: {
                name: '',
                phone: '',
                email: ''
            }
        });
    }

    render() {
        return(
            <form className = "input-form">
                <div>
                    <label>
                        <p>Name:</p>
                        <input type = "text" 
                            name = "name"
                            value = {this.state.contact.name}
                            onChange={this.handleChangeName}
                            placeholder = "Enter your name"
                            />
                    </label>
                </div>

                <div>
                    <label>
                        <p>Phone:</p>
                        <input type = "text"
                        name = "phone"
                        value = {this.state.contact.phone}
                        onChange={this.handleChangePhone}
                        placeholder = "Enter your phone number" />
                    </label>
                </div>

                <div>
                    <label>
                        <p>E-mail:</p>
                        <input type = "email"
                        name = "email"
                        value={this.state.contact.email}
                        onChange={this.handleChangeEmail}
                        placeholder = "Enter your email" />
                    </label>
                </div>

                <input type = "submit"
                className = "form-submit"
                onClick = {this.addContact}
                value="Submit" />
            </form>
        );
    }
}

export default Form;