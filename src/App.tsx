import SearchBar from './containers/SearchBar/SearchBar.tsx';
import ShowList from './containers/ShowList/ShowList.tsx';

const App = () => {
  return (
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <SearchBar/>
      <ShowList/>
    </div>
  );
};

export default App;