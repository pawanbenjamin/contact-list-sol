import ContactRow from "./ContactRow";

const ContactList = ({ contacts, selectSingleContact }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              selectSingleContact={selectSingleContact}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
