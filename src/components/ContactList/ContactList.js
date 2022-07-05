import css from './ContactList.module.css'


const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactsItem}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;