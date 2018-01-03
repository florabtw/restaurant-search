import { h, Component } from 'preact';

import RestaurantList from '../RestaurantList';

import style from './searchresults.css';

class SearchResults extends Component {
  render() {
    const { results } = this.props;

    return (
      <div id={style.searchresults}>
        <h4 class="infoline">
          <span class="infoline__text">
            <strong>34 results found</strong> in 0.002 seconds
          </span>
          <span class="infoline__underline" />
        </h4>
        <RestaurantList restaurants={results} />
      </div>
    );
  }
}

export default SearchResults;
