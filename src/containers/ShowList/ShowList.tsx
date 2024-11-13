import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../app/Store/store.ts';
import { useNavigate } from 'react-router-dom';

const ShowList: React.FC = () => {
  const shows = useSelector((state: RootState) => state.shows.items);
  const loading = useSelector((state: RootState) => state.shows.loading);
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.shows.error);

  const handleShowClick = (id: number) => {
    navigate(`/shows/${id}`);
  };

  if (loading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-4">
        <p className="text-danger">Failed to load shows: {error}</p>
      </div>
    );
  }

  return (
    <div className="list-group mt-3">
      {shows.map((show) => (
        <button
          key={show.id}
          className="list-group-item list-group-item-action"
          onClick={() => handleShowClick(show.id)}
          style={{ cursor: "pointer" }}
        >
          {show.name}
        </button>
      ))}
    </div>
  );
};

export default ShowList;
