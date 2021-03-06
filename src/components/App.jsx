import React from "react"
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Phonebook from "./Phonebook/Phonebook";


class App extends React.Component{

  state = {
    contacts: [],
    filter: '',
  }

  onFilterChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  };
  
  addContact = data => {
    const contactName =
      this.state.contacts.map(contact =>
      contact.name.toLowerCase())
    if (!contactName.includes(data.name.toLowerCase())) {
      this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
      }))
    }
    else {
      return alert(`${data.name} is allready in contacts`)
    } 
    
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    const filter = this.filter();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} filter={filter.name} />
        <ContactList filter={filter} onDelete={this.onDelete} />
      </div>
    )
  }
}

export default App