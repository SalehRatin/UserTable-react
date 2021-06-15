import React from "react";

const Label = ({ onToggle, columns, column }) => {
  return (
    <li>
      {column.name}
      <input
        type="checkbox"
        onChange={onToggle}
        name={column.name}
        checked={columns.includes(column)}
      />
    </li>
  );
};
export default Label;
