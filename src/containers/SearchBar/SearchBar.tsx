import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/Store/store.ts';
import { fetchShows } from '../../app/Store/showsSlice.ts';
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((state: RootState) => state.shows.items);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        dispatch(fetchShows(query));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleSelectShow = (id: number) => {
    navigate(`/shows/${id}`);
  };

  return (
    <div className="container mt-3 position-relative">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for TV Show"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {shows.length > 0 && (
        <div
          className="list-group position-absolute mt-1"
          style={{
            zIndex: 1000,
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderTop: "none",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            overflow: "hidden",
          }}
        >
          {shows.map((show) => (
            <button
              key={show.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelectShow(show.id)}
              style={{cursor: "pointer"}}
            >
              {show.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
