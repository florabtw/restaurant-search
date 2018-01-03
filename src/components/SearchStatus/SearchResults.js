import { h, Component } from 'preact';

import RestaurantList from '../RestaurantList';

import style from './searchresults.css';

const restaurants = [
  {
    name: 'Anchor and Hope',
    rating: 4.2,
    reviews: 1897,
    cuisine: 'American & Seafood',
    location: 'SOMA',
    pricing: '$31 to $51',
    image: 'https://www.opentable.com/img/restimages/101422.jpg'
  },
  {
    name: 'Bluestem Brasserie',
    rating: 3.5,
    reviews: 1123,
    cuisine: 'American',
    location: 'Downtown / Union Square',
    pricing: '$31 to $50',
    image: 'https://www.opentable.com/img/restimages/37393.jpg'
  }
];

class SearchResults extends Component {
  render() {
    return (
      <div id={style.searchresults}>
        <h4 class="infoline">
          <span class="infoline__text">
            <strong>34 results found</strong> in 0.002 seconds
          </span>
          <span class="infoline__underline" />
        </h4>
        <RestaurantList restaurants={restaurants} />
      </div>
    );
  }
}

export default SearchResults;
