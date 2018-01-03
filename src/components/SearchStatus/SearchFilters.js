import { h, Component } from 'preact';
import cx from 'classnames';

const cuisines = [
  { label: 'Italian', count: 70 },
  { label: 'American', count: 47, selected: true },
  { label: 'Californian', count: 42 }
];

const payments = [
  { label: 'Visa', count: 70 },
  { label: 'Mastercard', count: 47, selected: true },
  { label: 'Amex', count: 42 }
];

class SearchFilters extends Component {
  render() {
    const { show } = this.props;

    const classes = { 'sidebar--show': show };

    return (
      <div class={cx('sidebar', classes)}>
        <SearchFilter title="Cuisine/Food Type" options={cuisines} />
        <SearchFilter title="Payment Options" options={payments} />
      </div>
    );
  }
}

class SearchFilter extends Component {
  render() {
    const { title, options } = this.props;

    const $options = options.map(option => {
      const classes = {
        'filter__option--selected': option.selected
      };

      const classnames = cx('filter__option', classes);

      return (
        <li key={option.label} class={classnames}>
          <div>{option.label}</div>
          <div class="filter__option-label">{option.count}</div>
        </li>
      );
    });

    return (
      <div class="filter">
        <h3 class="filter__title">{title}</h3>
        <ul class="filter__options">{$options}</ul>
      </div>
    );
  }
}

export default SearchFilters;
