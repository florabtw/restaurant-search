import { h, Component } from 'preact';

import style from './searchbar.css';

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id={style.searchbar}>
        <h1 style="display: none;">
          Search for Restaurants by Name, Cuisine, Location
        </h1>
        <input
          type="text"
          placeholder="Search for Restaurants by Name, Cuisine, Location"
        />
      </div>
    );
  }
}

export default SearchBar;
