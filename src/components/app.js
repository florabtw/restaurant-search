import { h, Component } from 'preact';

import SearchBar from './SearchBar';
import SearchStatus from './SearchStatus';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div class="page">
          <SearchBar />
          <SearchStatus />
        </div>
      </div>
    );
  }
}

export default App;
