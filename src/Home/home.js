import Filter from "./components/filter";
import UserList from "./components/userList";
import UserEdit from "./components/userEdit";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [columns, setColumns] = useState([
    "id",
    "userId",
    "title",
    "completed",
    "action",
  ]);
  const [userList, setUserList] = useState([]);
  const [userDataForEdit, setUserDataForEdit] = useState({
    userId: "",
    id: "",
    title: "",
    completed: false,
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    const foundUserIndex = userList.findIndex((item) => item.id === userId);
    if (foundUserIndex === -1) return;
    setUserList((userList) => [
      ...userList.slice(0, foundUserIndex),
      ...userList.slice(foundUserIndex + 1),
    ]);
  };

  const handleEditUser = (userId) => {
    const foundUser = userList.find((item) => item.id === userId);
    if (foundUser) setUserDataForEdit(foundUser);
  };

  const handleSubmit = () => {
    if (!userDataForEdit) return;
    const foundUserIndex = userList.findIndex(
      (item) => item.id === userDataForEdit.id
    );
    setUserList((userList) => [
      ...userList.slice(0, foundUserIndex),
      { ...userDataForEdit },
      ...userList.slice(foundUserIndex + 1),
    ]);
    setUserDataForEdit({
      userId: "",
      id: "",
      title: "",
      completed: false,
    });
  };

  const onChangeUserData = (e) => {
    if (e.target.type === "checkbox")
      setUserDataForEdit((data) => ({
        ...data,
        [e.target.name]: e.target.checked,
      }));
    else
      setUserDataForEdit((data) => ({
        ...data,
        [e.target.name]: e.target.value,
      }));
  };

  const handleChangeRowHidden = (e) => {
    const name = e.target.name;
    if (e.target.checked) {
      if (!columns.includes(name)) setColumns((columns) => [...columns, name]);
    } else {
      if (columns.includes(name))
        setColumns((columns) => columns.filter((item) => item !== name));
    }
  };

  return (
    <div className={"home"}>
      <Filter columns={columns} handleChangeRowHidden={handleChangeRowHidden} />
      <UserList
        columns={columns}
        userList={userList}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      <UserEdit
        userDataForEdit={userDataForEdit}
        handleSubmit={handleSubmit}
        onChangeUserData={onChangeUserData}
      />
    </div>
  );
};

export default Home;
