import { h, Component } from 'preact';
import cx from 'classnames';

import Stars from '../Stars/';
import LocationInput from '../LocationInput';

class SearchFilters extends Component {
  render() {
    const {
      show,
      facets,
      filters,
      onFacetClick,
      onLocationChange,
      onNumericFilterClick
    } = this.props;

    const classes = { 'sidebar--show': show };

    return (
      <div class={cx('sidebar', classes)}>
        <LocationInput onLocationChange={onLocationChange} />
        <SearchFilter
          facet="cuisine"
          onClick={onFacetClick}
          options={facets.cuisine}
          title="Cuisine/Food Type"
        />
        <RatingsFilter
          onClick={onNumericFilterClick}
          selected={filters.rating}
        />
        <SearchFilter
          facet="paymentOptions"
          onClick={onFacetClick}
          options={facets.payments}
          title="Payment Options"
        />
      </div>
    );
  }
}

class SearchFilter extends Component {
  constructor() {
    super();

    this.handleFacetClick = this.handleFacetClick.bind(this);
  }

  handleFacetClick(option) {
    this.props.onClick(this.props.facet, option);
  }

  render() {
    const { title, options, onClick } = this.props;

    const $options = options.map(option => {
      return <FilterOption {...option} onClick={this.handleFacetClick} />;
    });

    return (
      <div class="filter">
        <h3 class="filter__title">{title}</h3>
        <ul class="filter__options">{$options}</ul>
      </div>
    );
  }
}

class RatingsFilter extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.props.onClick('rating', value);
  }

  render() {
    const { selected } = this.props;

    const $options = [1, 2, 3, 4, 5].map(n => {
      return (
        <RatingOption
          onClick={this.handleClick}
          selected={n === selected}
          value={n}
        />
      );
    });

    return (
      <div class="filter">
        <h3 class="filter__title">Rating</h3>
        <ul class="filter__options">{$options}</ul>
      </div>
    );
  }
}

class FilterOption extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, count, isRefined } = this.props;

    const classes = {
      'filter__option--selected': isRefined
    };

    const classnames = cx('filter__option', classes);

    return (
      <li key={name} class={classnames} onClick={this.handleClick}>
        <div>{name}</div>
        <div class="filter__option-label">{count}</div>
      </li>
    );
  }
}

class RatingOption extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.value);
  }

  render() {
    const { value, selected } = this.props;

    const classes = {
      'filter__option--selected': selected
    };

    const classnames = cx('filter__option', classes);

    return (
      <li key={value} class={classnames} onClick={this.handleClick}>
        <Stars rating={value} />
      </li>
    );
  }
}

export default SearchFilters;
