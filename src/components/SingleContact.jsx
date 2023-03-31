import React from "react";

export default function SingleContact({ singleContact }) {
  console.log(singleContact);
  return (
    <div>
      <ul>
        <li>{singleContact.name}</li>
        <li>{singleContact.email}</li>
        <li>{singleContact.username}</li>
      </ul>
    </div>
  );
}
