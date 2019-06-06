import React from "react";

export default function TableItem(props) {
  const { id, user, deleteUser } = props;
  const handleClick = () => {
    deleteUser(id);
  };
  return (
    <tr>
      <td>{user}</td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  );
}
