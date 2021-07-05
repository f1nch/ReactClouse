import React from 'react';

export const Search = ({
  searchTerm, onFormSubmit, onInputChange,
}) => (
  <div className="search">
    <form onSubmit={onFormSubmit}>
      <label htmlFor="search__input">
        <input
          type="text" id="search__input" value={searchTerm}
          onChange={onInputChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  </div>
);
