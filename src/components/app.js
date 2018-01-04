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
      filters: {
        rating: 0
      },
      hitCount: 0,
      results: [],
      query: '',
      queryTime: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumericFilterClick = this.handleNumericFilterClick.bind(this);
  }

  componentDidMount() {
    restaurantIndex.on('result', content => {
      const cuisines = content.getFacetValues('cuisine');

      this.setState({
        facets: {
          cuisine: cuisines
        },
        hitCount: content.nbHits,
        results: content.hits,
        queryTime: content.processingTimeMS
      });
    });

    restaurantIndex.setQueryParameter('maxValuesPerFacet', 5);
    restaurantIndex.setQueryParameter('hitsPerPage', 3);
    restaurantIndex.search();
  }

  handleNumericFilterClick(name, value) {
    const refinement = restaurantIndex.getNumericRefinement(name, '>=');

    restaurantIndex.removeNumericRefinement(name);

    let nextValue = 0;
    if (typeof refinement === 'undefined' || refinement[0] !== value) {
      restaurantIndex.addNumericRefinement(name, '>=', value);
      nextValue = value;
    }

    this.setState(state => ({
      filters: {
        ...state.filters,
        [name]: nextValue
      }
    }));

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
    const { query, results, facets, queryTime, hitCount, filters } = this.state;

    return (
      <div id="app">
        <div class="page">
          <SearchBar query={query} onChange={this.handleInputChange} />
          <SearchStatus
            facets={facets}
            filters={filters}
            hitCount={hitCount}
            onFacetClick={this.handleFacetClick}
            onNumericFilterClick={this.handleNumericFilterClick}
            queryTime={queryTime}
            results={results}
          />
        </div>
      </div>
    );
  }
}

export default App;
