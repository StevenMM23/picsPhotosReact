import React, { useRef, useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);

    setInputValue(() => {
      return "";
    });
  };
  console.log(inputValue);
  const handlerOnChange = (e) => {
    setInputValue(() => {
      return e.target.value;
    });
  };
  return (
    <div className="">
      <form onSubmit={handleFormSubmit}>
        <div class="input-group">
          <input
            value={inputValue}
            onChange={handlerOnChange}
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="Submit" class="btn btn-outline-primary">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
