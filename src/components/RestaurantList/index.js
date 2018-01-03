import { h, Component } from 'preact';

import Stars from '../Stars';

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props;

    const $restaurants = restaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} {...restaurant} />;
    });

    return <ul class="restaurants">{$restaurants}</ul>;
  }
}

class Restaurant extends Component {
  render() {
    const {
      cuisine,
      image,
      neighborhood,
      name,
      prices,
      rating,
      reviews
    } = this.props;

    return (
      <div class="restaurant">
        <div class="restaurant__image">
          <img src={image} />
        </div>
        <div class="restaurant__body">
          <h2 class="restaurant__name">{name}</h2>
          <Rating rating={rating} reviews={reviews} />
          <div class="restaurant__meta">
            {cuisine} | {neighborhood} | {prices}
          </div>
        </div>
      </div>
    );
  }
}

class Rating extends Component {
  render() {
    const { rating, reviews } = this.props;

    return (
      <div class="rating">
        <span class="rating__value">{rating}</span>
        <Stars rating={rating} />
        <span class="rating__reviews">({reviews} reviews)</span>
      </div>
    );
  }
}

export default RestaurantList;
