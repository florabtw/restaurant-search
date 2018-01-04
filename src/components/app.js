import { h, Component } from 'preact';

import SearchBar from './SearchBar';
import SearchStatus from './SearchStatus';

import { restaurantIndex } from '../client.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      facets: {
        cuisine: [],
        payments: []
      },
      filters: {
        rating: 0
      },
      hitCount: 0,
      results: [],
      query: '',
      queryTime: 0,
      showMore: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumericFilterClick = this.handleNumericFilterClick.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
  }

  componentDidMount() {
    restaurantIndex.on('result', this.handleSearchResult);

    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      restaurantIndex
        .setQueryParameter('aroundLatLng', `${latitude}, ${longitude}`)
        .search();
    });

    restaurantIndex
      .setQueryParameter('aroundPrecision', 200)
      .setQueryParameter('maxValuesPerFacet', 5)
      .setQueryParameter('hitsPerPage', 3)
      .search();
  }

  handleSearchResult(content) {
    const cuisines = content.getFacetValues('cuisine');
    const payments = content.getFacetValues('paymentOptions');

    const { results } = this.state;

    const nextResults =
      content.page > 0 ? results.concat(content.hits) : content.hits;

    this.setState({
      facets: {
        cuisine: cuisines,
        payments: payments
      },
      hitCount: content.nbHits,
      queryTime: content.processingTimeMS,
      results: nextResults,
      showMore: content.page < content.nbPages - 1
    });
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
    restaurantIndex.toggleFacetRefinement(facet, option).search();
  }

  handleInputChange(input) {
    this.setState({ query: input });

    restaurantIndex.setQuery(input).search();
  }

  handleShowMoreClick() {
    restaurantIndex.nextPage().search();
  }

  render() {
    const {
      facets,
      filters,
      hitCount,
      query,
      queryTime,
      results,
      showMore
    } = this.state;

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
            onShowMoreClick={this.handleShowMoreClick}
            queryTime={queryTime}
            results={results}
            showMore={showMore}
          />
        </div>
      </div>
    );
  }
}

export default App;
