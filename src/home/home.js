import Filter, { allColumns } from "./components/filter";
import UserList from "./components/userList";
import "./home.scss";
import { useEffect, useState } from "react";
import UserService from "../api/userService";

const Home = () => {
  const [columns, setColumns] = useState(allColumns);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    UserService.getUserList()
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

  const handleHideColumn = (e) => {
    const name = e.target.name;
    const foundColumn = allColumns.find((item) => item.name === name);
    if (e.target.checked) {
      if (!columns.some((item) => item.name === name))
        setColumns((columns) => [...columns, foundColumn]);
    } else {
      if (columns.some((item) => item.name === name))
        setColumns((columns) => columns.filter((item) => item.name !== name));
    }
  };

  return (
    <div className={"home"}>
      <Filter onToggle={handleHideColumn} columns={columns} />
      <UserList
        columns={columns}
        userList={userList}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};
export default Home;
