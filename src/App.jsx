import { useState, useEffect } from "react";
import { ContactList } from "./сomponents/ContactList/ContactList.jsx";
import { SearchBox } from "./сomponents/SearchBox/SearchBox.jsx";
import { ContactForm } from "./сomponents/ContactForm/ContactForm.jsx";

import css from "../src/App.module.css";

export function App() {
  const dataUserContact = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    { id: "id-4", name: "Vasyl Kozhokar", number: "555-55-55" },
  ];
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("my-key");
    return savedContact !== null ? JSON.parse(savedContact) : dataUserContact;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  function filtered(e) {
    setFilter(e.target.value);
  }

  const filterContact = () => {
    return contacts.filter((user) =>
      user.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContact = filterContact();

  useEffect(() => {
    window.localStorage.setItem("my-key", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (userId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((user) => {
        return user.id !== userId;
      })
    );
  };

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onSearch={filtered} value={filter} />
      <ContactList contactsData={filteredContact} onDelete={deleteContact} />
    </div>
  );
}