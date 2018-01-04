import { h, Component } from 'preact';

import RestaurantList from '../RestaurantList';

import style from './searchresults.css';

class SearchResults extends Component {
  render() {
    const {
      hitCount,
      onShowMoreClick,
      queryTime,
      results,
      showMore
    } = this.props;

    const seconds = toSeconds(queryTime);

    return (
      <div id={style.searchresults}>
        <h4 class="infoline">
          <span class="infoline__text">
            <strong>{hitCount} results found</strong> in {seconds} seconds
          </span>
          <span class="infoline__underline" />
        </h4>
        <RestaurantList restaurants={results} />
        {showMore && (
          <button class="button" onClick={onShowMoreClick}>
            Show More
          </button>
        )}
      </div>
    );
  }
}

function toSeconds(millis) {
  return (millis / 1000).toFixed(3);
}

export default SearchResults;
