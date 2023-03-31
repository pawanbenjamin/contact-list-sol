import React, { useState, useEffect } from "react";

import ContactList from "./ContactList";
import { fetchContacts, fetchSingleContact } from "../api";
import SingleContact from "./SingleContact";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [singleContact, setSingleContact] = useState(null);

  async function selectSingleContact(id) {
    const contact = await fetchSingleContact(id);
    setSingleContact(contact);
  }

  useEffect(() => {
    async function getContacts() {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    }

    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {singleContact ? (
          <SingleContact singleContact={singleContact} />
        ) : (
          <ContactList
            contacts={contacts}
            selectSingleContact={selectSingleContact}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
