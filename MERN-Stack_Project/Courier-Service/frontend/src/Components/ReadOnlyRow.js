import React from 'react'

const ReadOnlyRow = ({ contact }) => {
    return (
        <tr>
          <td>{contact.oid}</td>
          <td>{contact.fullName}</td>
          <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.reason}</td>
          </tr>
    );
};

export default ReadOnlyRow