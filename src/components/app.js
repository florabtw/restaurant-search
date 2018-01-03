import { h, Component } from 'preact';

import SearchBar from './SearchBar';
import SearchStatus from './SearchStatus';

import { restaurantIndex } from '../client.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      query: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    restaurantIndex.on('result', content => {
      this.setState({ results: content.hits });
    });
  }

  handleInputChange(input) {
    this.setState({ query: input });

    restaurantIndex.setQuery(input);
    restaurantIndex.search();
  }

  render() {
    const { query, results } = this.state;

    return (
      <div id="app">
        <div class="page">
          <SearchBar query={query} onChange={this.handleInputChange} />
          <SearchStatus results={results} />
        </div>
      </div>
    );
  }
}

export default App;
