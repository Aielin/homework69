import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../app/Store/store.ts';

const ShowList: React.FC = () => {
  const shows = useSelector((state: RootState) => state.shows.items);
  const loading = useSelector((state: RootState) => state.shows.loading);

  if (loading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="list-group mt-3">
      {shows.map((show) => (
        <button
          key={show.id}
          className="list-group-item list-group-item-action"
        >
          {show.name}
        </button>
      ))}
    </div>
  );
};

export default ShowList;
