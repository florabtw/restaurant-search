import { h, Component } from 'preact';

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

export default SearchResults;
