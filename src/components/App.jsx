import React from "react"

class App extends React.Component{

  state = {
    contacts: [],
    name:''
  }
     
  onInputChange = e => {

    const { name, value } = e.currentTarget;

    this.setState({ [name]: value })  
  }

  onSubmitHandle = e => {
    e.preventDefault();

    
  }
  
    render() {
      return (
        <div>

        <h1>Phonebook</h1>

        <form onSubmit={this.onSubmitHandle}>
          <label>
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.onInputChange} />
              <button type = "submit">Add contact</button>
          </label>
          </form>

          <ul>{ this.onSubmitHandle }</ul>
        </div>
      )
    }
}

export default App