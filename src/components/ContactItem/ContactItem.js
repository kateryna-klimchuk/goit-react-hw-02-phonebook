import css from './ContactItem.module.css';
import PropTypes from 'prop-types';


const ContactItem = ({ contacts, onDeleteContact }) => {
return (
    contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={css.contactsItem}>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            className={css.contactBtn}
            onClick={() => onDeleteContact(id)}
          >
            x
          </button>
        </li>
      );
    })
)
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;