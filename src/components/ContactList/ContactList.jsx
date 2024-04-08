import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts, onDelete}) => {

    return (
    <ul className={styles.contactList}>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
