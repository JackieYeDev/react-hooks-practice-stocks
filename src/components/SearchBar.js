import React, { useState } from "react";

function SearchBar({ handleFilterChange, handleSortChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type='radio'
          value='Alphabetically'
          name='sort'
          checked={null}
          onChange={e => handleSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type='radio'
          value='Price'
          name='sort'
          checked={null}
          onChange={e => handleSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e => handleFilterChange(e.target.value)}>
          <option value='Tech'>Tech</option>
          <option value='Sportswear'>Sportswear</option>
          <option value='Finance'>Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
