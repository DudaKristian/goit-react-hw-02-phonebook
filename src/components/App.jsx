import React from "react"
import shortId from "shortid"

class App extends React.Component{

  state = {
    contacts: [],
    name: '',
  }

  nameInputId = shortId.generate();
  

  onInputChange = e => {

    const { name, value } = e.target;

    this.setState({ [name]: value })  
  }

  addContact = name => {
    const contact = {
      id: shortId.generate(),
      name,
    }
    
    console.log(contact)

    this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
    }))
  };

  formReset = () => {
    this.setState(
      {
        contacts: [],
        name: ''
      }
    )
  };


  onSubmitHandle = e => {
  e.preventDefault();
        
    this.addContact(this.state.name)

    // console.log(this.state.contacts)

    this.formReset()

  };
  
    render() {
      return (
        <div>

        <h1>Phonebook</h1> 

        <form onSubmit={this.onSubmitHandle}>
          <label htmlFor={this.nameInputId}>
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.onInputChange}
                id={this.nameInputId} />
              <button type = "submit">Add contact</button>
          </label>
          </form>
          <h2>Contacts</h2>
          <ul>{this.state.contacts.map(contact => (<li key={contact.id}>{contact.name}</li>))}</ul>
        </div>
      )
    }
}

export default App