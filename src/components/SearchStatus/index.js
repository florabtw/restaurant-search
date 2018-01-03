import { h, Component } from 'preact';
import cx from 'classnames';

import SearchFilters from './SearchFilters.js';

import style from './searchstatus.css';

import filterIcon from '../../assets/icons/filter.svg';
import doneIcon from '../../assets/icons/done.svg';

class SearchStatus extends Component {
  constructor() {
    super();

    this.state = {
      showFilters: false
    };

    this.handleShowFilters = this.handleShowFilters.bind(this);
  }

  handleShowFilters(e) {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  render() {
    const { showFilters } = this.state;

    const fabClasses = {
      [style['fab--filter']]: !showFilters,
      [style['fab--done']]: showFilters
    };

    const fabClassnames = cx(style.fab, fabClasses);

    return (
      <div>
        <SearchFilters show={showFilters} />
        <SearchResults />
        <button class={fabClassnames} onClick={this.handleShowFilters}>
          <img
            src={filterIcon}
            alt="Show filters"
            class={style['filter-icon']}
          />
          <img src={doneIcon} alt="Done" class={style['done-icon']} />
        </button>
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
