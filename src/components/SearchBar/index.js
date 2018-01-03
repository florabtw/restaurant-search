import { h, Component } from 'preact';

import style from './searchbar.css';

class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { query, onChange } = this.props;

    return (
      <div id={style.searchbar}>
        <h1 style="display: none;">
          Search for Restaurants by Name, Cuisine, Location
        </h1>
        <input
          onInput={this.handleChange}
          placeholder="Search for Restaurants by Name, Cuisine, Location"
          type="text"
          value={query}
        />
      </div>
    );
  }
}

export default SearchBar;
