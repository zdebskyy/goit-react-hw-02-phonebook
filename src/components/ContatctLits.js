import React from "react";
import PropTypes from "prop-types";

function ContactList({ contacts, onRemoveContact }) {
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
