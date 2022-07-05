import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';



import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
    nameInputId = nanoid();
    numberInputId = nanoid();
    
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
    render() {
        const { handleSubmitForm, nameInputId, handleInputChange, numberInputId } = this;
    return (
      <form className={css.form} onSubmit={handleSubmitForm}>
        <label htmlFor={nameInputId}>Name</label>

        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          id={nameInputId}
        />
        <label htmlFor={numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          id={numberInputId}
        />
        <button className={css.formBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
