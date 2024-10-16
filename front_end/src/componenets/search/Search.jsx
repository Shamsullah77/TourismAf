import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.setSearchValue);
  };
  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"

      />
    </div>
  );
};

export default Search;
