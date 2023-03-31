export default function ContactRow({ contact, selectSingleContact }) {
  return (
    <tr
      onClick={async () => {
        await selectSingleContact(contact.id);
      }}
      key={contact.id}
    >
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
