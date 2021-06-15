import React, { useEffect, useState } from "react";
import UserEdit from "./userEdit";
import { useHistory, useParams } from "react-router-dom";
import UserService from "../api/userService";
import "./userEditPage.scss";

const EditUserPage = () => {
  const params = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const id = params.userId;
    UserService.getUserById(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const onChangeUserData = (e) => {
    if (e.target.type === "checkbox")
      setUser((data) => ({
        ...data,
        [e.target.name]: e.target.checked,
      }));
    else
      setUser((data) => ({
        ...data,
        [e.target.name]: e.target.value,
      }));
  };

  const handleSubmit = () => {
    UserService.editUser(params.userId, user)
      .then((res) => {
        history.push(
          `/?${new URLSearchParams(window.location.search).toString()}`
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onCancel = () => {
    history.push(`/?${new URLSearchParams(window.location.search).toString()}`);
  };

  return (
    <div className={"user-edit"}>
      <UserEdit
        userDataForEdit={user}
        onCancel={onCancel}
        onChange={onChangeUserData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditUserPage;
