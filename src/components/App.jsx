import React from "react"
import shortId from "shortid"

class App extends React.Component{

  state = {
    contacts: [],
    name:''
  }

  nameInputId = shortId.generate();

  onInputChange = e => {

    const { name, value } = e.currentTarget;

    this.setState({ [name]: value })  
  }

  onSubmitHandle = e => {
    e.preventDefault();



    this.formReset()
  }
  
  formReset = () => {
    this.setState(
      {contacts: [],
      name:''}
    )
  } 

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
          <ul>{ this.onSubmitHandle }</ul>
        </div>
      )
    }
}

export default App