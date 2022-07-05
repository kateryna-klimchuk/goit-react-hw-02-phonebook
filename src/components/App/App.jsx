import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({name, number}) => {

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }

  render() {
    return (
      <div className={css.container}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
