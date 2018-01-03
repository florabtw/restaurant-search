import { h, Component } from 'preact';

class SearchStatus extends Component {
  render() {
    return (
      <div>
        <SearchFilters />
        <SearchResults />
      </div>
    );
  }
}

class SearchFilters extends Component {
  render() {
    return (
      <div class="sidebar">
        <h3>Cuisine/Food Type</h3>
        <ul>
          <li>Italian</li>
        </ul>
      </div>
    );
  }
}

class SearchResults extends Component {
  render() {
    return (
      <div class="searchresults">
        <h4>
          <strong>34 results found</strong> in 0.002 seconds
        </h4>
        <div class="searchresult">
          <h2>Anchor and Hope</h2>
        </div>
      </div>
    );
  }
}

export default SearchStatus;
