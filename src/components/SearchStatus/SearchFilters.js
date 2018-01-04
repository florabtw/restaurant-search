import { h, Component } from 'preact';
import cx from 'classnames';

const payments = [
  { name: 'Visa', count: 70 },
  { name: 'Mastercard', count: 47, selected: true },
  { name: 'Amex', count: 42 }
];

class SearchFilters extends Component {
  render() {
    const { show, facets, onFacetClick } = this.props;

    const classes = { 'sidebar--show': show };

    return (
      <div class={cx('sidebar', classes)}>
        <SearchFilter
          title="Cuisine/Food Type"
          facet="cuisine"
          options={facets.cuisine}
          onClick={onFacetClick}
        />
        <SearchFilter title="Payment Options" options={payments} />
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

export default SearchFilters;
