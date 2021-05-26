import { useState } from "react";

const pageSize = 10;

const UserList = ({ userList, handleDeleteUser, columns, handleEditUser }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPage = (page) => {
    setCurrentPage(page + 1);
  };

  const handleBeforeClick = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };
  const handleNextClick = () => {
    if (currentPage < userList.length / pageSize)
      setCurrentPage((page) => page + 1);
  };

  return (
    <div className={"home__user-list"}>
      <table>
        <thead>
          <tr>
            {columns.includes("id") && <th id="tbl-head-userid">Id</th>}
            {columns.includes("userId") && <th id="tbl-head-id">UserID</th>}
            {columns.includes("title") && <th id="tbl-head-title">Title</th>}
            {columns.includes("completed") && (
              <th id="tbl-head-completed">Completion</th>
            )}
            {columns.includes("action") && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {userList
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((item) => (
              <tr>
                {columns.includes("id") && <td>{item.id}</td>}
                {columns.includes("userId") && <td>{item.userId}</td>}
                {columns.includes("title") && <td>{item.title}</td>}
                {columns.includes("completed") && (
                  <td>{item.completed ? "true" : "false"}</td>
                )}
                {columns.includes("action") && (
                  <td>
                    <button onClick={() => handleEditUser(item.id)}>
                      edit
                    </button>
                    <button onClick={() => handleDeleteUser(item.id)}>
                      delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <ul className={"home__pagination"}>
        <li onClick={handleBeforeClick}>Previous</li>
        {"*"
          .repeat(userList.length / pageSize)
          .split("")
          .map((item, index) => index)
          .filter((item, index) => {
            return Math.abs(index - currentPage) < 4;
          })
          .map((item, index) => (
            <li
              className={item + 1 === currentPage && "item-active"}
              onClick={() => handleClickPage(item)}
            >
              {item + 1}
            </li>
          ))}
        <li onClick={handleNextClick}>Next</li>
      </ul>
    </div>
  );
};

export default UserList;
