const EditInputs = ({ userDataForEdit, onChange, getData }) => {
  return (
    <div>
      <label htmlFor="">
        {getData.name}
        <input
          type="text"
          name={getData.name}
          value={userDataForEdit[getData.value]}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
export default EditInputs;
