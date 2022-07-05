import css from './ContactList.module.css';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/index';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;