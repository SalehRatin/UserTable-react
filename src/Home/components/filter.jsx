const Filter = ({ handleChangeRowHidden, columns }) => {
  return (
    <div className={"home__filter"}>
      <h3>Switch to hide</h3>
      <ul>
        <li>
          Id :{" "}
          <input
            checked={columns.includes("id")}
            name={"id"}
            type={"checkbox"}
            onChange={handleChangeRowHidden}
          />
        </li>
        <li>
          User Id :{" "}
          <input
            checked={columns.includes("userId")}
            name={"userId"}
            type={"checkbox"}
            onChange={handleChangeRowHidden}
          />
        </li>
        <li>
          Title :{" "}
          <input
            checked={columns.includes("title")}
            name={"title"}
            type={"checkbox"}
            onChange={handleChangeRowHidden}
          />
        </li>
        <li>
          Completion :{" "}
          <input
            checked={columns.includes("completed")}
            name={"completed"}
            type={"checkbox"}
            onChange={handleChangeRowHidden}
          />
        </li>
        <li>
          Action :{" "}
          <input
            checked={columns.includes("action")}
            name={"action"}
            type={"checkbox"}
            onChange={handleChangeRowHidden}
          />
        </li>
      </ul>
    </div>
  );
};

export default Filter;
