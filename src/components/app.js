import { h, Component } from 'preact';

import SearchBar from './SearchBar';
import SearchStatus from './SearchStatus';

import { restaurantIndex } from '../client.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      facets: {
        cuisine: []
      },
      results: [],
      query: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    restaurantIndex.on('result', content => {
      const cuisines = content.getFacetValues('cuisine');

      this.setState({
        results: content.hits,
        facets: {
          cuisine: cuisines
        }
      });
    });

    restaurantIndex.setQueryParameter('maxValuesPerFacet', 5);
    restaurantIndex.setQueryParameter('hitsPerPage', 3);
    restaurantIndex.search();
  }

  handleFacetClick(facet, option) {
    restaurantIndex.toggleFacetRefinement(facet, option);
    restaurantIndex.search();
  }

  handleInputChange(input) {
    this.setState({ query: input });

    restaurantIndex.setQuery(input);
    restaurantIndex.search();
  }

  render() {
    const { query, results, facets } = this.state;

    return (
      <div id="app">
        <div class="page">
          <SearchBar query={query} onChange={this.handleInputChange} />
          <SearchStatus
            results={results}
            facets={facets}
            onFilterChange={this.handleFilterChange}
            onFacetClick={this.handleFacetClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
