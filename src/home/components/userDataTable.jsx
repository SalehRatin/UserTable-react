import React from "react";
import { Link } from "react-router-dom";

const UserDataTable = ({
  columns,
  data,
  sortColumn,
  currentPage,
  pageSize,
  onDelete,
  handleSort,
}) => {
  const generateSortIcon = (column) => {
    if (sortColumn.column === column)
      if (sortColumn.order === 1) return "↑ ";
      else return "↓ ";
    else return "";
  };

  const generateTitle = (value) => {
    if (value.split(" ").length > 5)
      return value.split(" ").slice(0, 5).join(" ") + " ...";
    else return value;
  };

  return (
    <table>
      <thead>
        <tr>
          {React.Children.toArray(
            columns
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <th
                  className={`${
                    item.name === "action" ? "home__th-actions" : ""
                  }`}
                  onClick={() => handleSort(item.name)}
                >
                  {generateSortIcon(item.name) + item.name}
                </th>
              ))
          )}
        </tr>
      </thead>
      <tbody>
        {React.Children.toArray(
          data
            .sort((a, b) => {
              const fA = a[sortColumn.column];
              const fB = b[sortColumn.column];
              if (typeof fA === "number")
                return sortColumn.order === 1 ? fA - fB : fB - fA;
              else if (typeof fA === "string")
                return sortColumn.order === 1
                  ? fA.localeCompare(fB)
                  : fB.localeCompare(fA);
              else if (typeof fA === "boolean")
                return sortColumn.order === 1
                  ? fA > fB
                    ? 1
                    : -1
                  : fA > fB
                  ? -1
                  : 1;
              return 0;
            })
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((item) => (
              <tr>
                {React.Children.toArray(
                  columns
                    .sort((a, b) => a.order - b.order)
                    .map((column) => {
                      if (column.type === "boolean")
                        return <td>{item[column.name] ? "true" : "false"}</td>;
                      else if (column.type === "action")
                        return (
                          <td className={"home__th-actions"}>
                            <Link
                              to={`/${item.id}?page=${currentPage}&sortBy=${sortColumn.column}`}
                            >
                              <button>Edit</button>
                            </Link>
                            <button
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you wish to delete this row?"
                                  )
                                )
                                  onDelete(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        );
                      else if (column.name === "title")
                        return <td>{generateTitle(item[column.name])}</td>;
                      return <td>{item[column.name]}</td>;
                    })
                )}
              </tr>
            ))
        )}
      </tbody>
    </table>
  );
};

export default UserDataTable;
