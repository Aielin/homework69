import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppDispatch, RootState } from '../../app/Store/store.ts';
import { fetchShowDetails } from '../../app/Store/showDetailsSlice.ts';

const ShowDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const showDetails = useSelector((state: RootState) => state.showDetails.details);
  const loading = useSelector((state: RootState) => state.showDetails.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchShowDetails(Number(id)));
    }
  }, [dispatch, id]);

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
    <div className="container mt-4">
      {showDetails ? (
        <>
          <h2>{showDetails.name}</h2>
          {showDetails.image && (
            <img src={showDetails.image.medium} alt={showDetails.name} className="img-fluid" />
          )}
          <p dangerouslySetInnerHTML={{ __html: showDetails.summary }}></p>
        </>
      ) : (
        <p>Show details not available.</p>
      )}
    </div>
  );
};

export default ShowDetails;
