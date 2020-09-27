import React from "react";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>
            {contact.name} : {contact.number}
          </span>
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
