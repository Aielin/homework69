import SearchBar from './containers/SearchBar/SearchBar.tsx';
import ShowList from './containers/ShowList/ShowList.tsx';
import { Route, Routes } from 'react-router-dom';
import ShowDetails from './containers/ShowDetails/ShowDetails.tsx';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <ShowList />
            </>
          }
        />
        <Route path="/shows/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
};

export default App;