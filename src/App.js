import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [cats, setCats] = useState([]); // Changed state name to setCats
  const [filteredCats, setFilteredCats] = useState(cats); // Changed state name to setFilteredCats

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCats(users)); // Fixed typo: setats -> setCats
  }, []);

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField);
    });
    setFilteredCats(newFilteredCats); // Fixed typo: setFiltercats -> setFilteredCats
  }, [cats, searchField]); // Fixed dependency: footballers -> cats

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Cats</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search cats" // Changed placeholder text to "search cats"
      />

      <CardList cats={filteredCats} /> {/* Changed prop name to match state */}
    </div>
  );
};

export default App;
