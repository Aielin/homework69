import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../app/Store/store.ts';
import { fetchShows } from '../../app/Store/showsSlice.ts';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchShows(query));
    }
  };

  return (
    <div className="container mt-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for TV Show"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
