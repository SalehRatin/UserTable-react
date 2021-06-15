import React, { useState } from "react";
import Pagination from "./pagination";
import UserDataTable from "./userDataTable";
import { useHistory } from "react-router-dom";

const pageSize = 10;

const UserList = ({ userList, columns, onDelete }) => {
  let page = new URLSearchParams(window.location.search).get("page");
  let sortBy = new URLSearchParams(window.location.search).get("sortBy");
  page = page ? parseInt(page) : 1;
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(page);
  const [sortColumn, setSortColumn] = useState({
    column: sortBy || undefined,
    order: 1,
  });

  const handleClickPage = (page) => {
    history.push("/?page=" + (page + 1));
    setCurrentPage(page + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };
  const handleNextPage = () => {
    if (currentPage < userList.length / pageSize)
      setCurrentPage((page) => page + 1);
  };

  const handleSort = (columnName) => {
    if (sortColumn.column === columnName)
      setSortColumn({
        column: columnName,
        order: sortColumn.order * -1,
      });
    else
      setSortColumn({
        column: columnName,
        order: 1,
      });
  };

  return (
    <div className={"home__user-list"}>
      <UserDataTable
        sortColumn={sortColumn}
        data={userList}
        currentPage={currentPage}
        handleSort={handleSort}
        columns={columns}
        onDelete={onDelete}
        pageSize={pageSize}
      />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handleClickPage={handleClickPage}
        handlePrevPage={handlePrevPage}
        pageCount={userList.length / pageSize}
      />
    </div>
  );
};

export default UserList;
