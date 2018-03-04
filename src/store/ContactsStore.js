var ContactsStore = {
    contacts: [],

    deleteContact(delContact) {
        for(let i = 0;i<this.contacts.length;i++) {
            if(this.contacts[i].id === delContact.id) {
                let temp = this.contacts[i];
                this.contacts[i] = this.contacts[this.contacts.length-1];
                this.contacts[this.contacts.length-1] = temp;
                this.contacts.pop();
            }
        }
    },

    addContact(contact) {
        this.contacts.push(contact);
    },

    getAll: function(){
        return this.contacts;
    }
}

export default ContactsStore;