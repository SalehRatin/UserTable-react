import React from "react";
import EUser from "../home/EUser";
import EditInputs from "./components/inputs";

const getData = [
  {
    id: 1,
    name: "UserId",
    value: "userId",
  },
  {
    id: 1,
    name: "Id",
    value: "id",
  },
  {
    id: 1,
    name: "Title",
    value: "title",
  },
];

const UserEdit = ({ userDataForEdit, onSubmit, onChange, onCancel }) => {
  return (
    <div className={"user-edit__input"}>
      {React.Children.toArray(
        getData.map((Data) => (
          <EditInputs
            userDataForEdit={userDataForEdit}
            onChange={onChange}
            getData={Data}
          />
        ))
      )}
      <label htmlFor="">
        Completion
        <input
          type="checkbox"
          name={EUser.COMPLETED}
          checked={userDataForEdit[EUser.COMPLETED]}
          onChange={onChange}
        />
      </label>
      <button onClick={onSubmit}>Submits</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
export default UserEdit;
