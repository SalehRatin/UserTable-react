const UserEdit = ({ userDataForEdit, handleSubmit, onChangeUserData }) => {
  return (
    <div className={"home__user-edit"}>
      <label htmlFor="id">
        ID
        <input
          type={"text"}
          placeholder={"ID"}
          name={"id"}
          value={userDataForEdit.userId}
          onChange={onChangeUserData}
        />
      </label>
      <label htmlFor="userid">
        UserID
        <input
          type={"text"}
          placeholder={"UserId"}
          name={"id"}
          value={userDataForEdit.id}
          onChange={onChangeUserData}
        />
      </label>
      <label htmlFor="title">
        Title
        <input
          type={"text"}
          placeholder={"Title"}
          name={"title"}
          value={userDataForEdit.title}
          onChange={onChangeUserData}
        />
      </label>
      <label htmlFor="completion">
        Completion
        <input
          type={"checkbox"}
          name={"completed"}
          checked={userDataForEdit.completed}
          onChange={onChangeUserData}
        />
      </label>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default UserEdit;
