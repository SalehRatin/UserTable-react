import React from "react";
import Label from "./filterLabel";
import EUser from "../EUser";

export const allColumns = [
  {
    id: 1,
    name: EUser.USER_ID,
    order: 1,
  },
  {
    id: 2,
    name: EUser.ID,
    order: 2,
  },
  {
    id: 3,
    name: EUser.TITLE,
    order: 3,
  },
  {
    id: 4,
    name: EUser.COMPLETED,
    type: "boolean",
    order: 4,
  },
  {
    id: 5,
    name: "action",
    type: "action",
    order: 5,
  },
];

const Filter = ({ onToggle, columns }) => {
  return (
    <div className={"home__filter"}>
      <h2>Switch to Hide</h2>

      <ul>
        {React.Children.toArray(
          allColumns.map((label) => (
            <Label columns={columns} column={label} onToggle={onToggle} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Filter;
