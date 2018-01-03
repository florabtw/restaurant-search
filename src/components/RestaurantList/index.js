import { h, Component } from 'preact';

import Stars from '../Stars';

import style from './restaurantlist.css';

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props;

    const $restaurants = restaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} {...restaurant} />;
    });

    return <ul class={style.restaurants}>{$restaurants}</ul>;
  }
}

class Restaurant extends Component {
  render() {
    const {
      name,
      rating,
      reviews,
      cuisine,
      location,
      pricing,
      image
    } = this.props;

    return (
      <div class={style.restaurant}>
        <div class={style.restaurant__image}>
          <img src={image} />
        </div>
        <div class={style.restaurant__body}>
          <h2 class={style.restaurant__name}>{name}</h2>
          <Rating rating={rating} reviews={reviews} />
          <div class={style.restaurant__meta}>
            {cuisine} | {location} | {pricing}
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
      <div class={style.rating}>
        <span class={style.rating__value}>{rating}</span>
        <Stars rating={rating} />
        <span class={style.rating__reviews}>({reviews} reviews)</span>
      </div>
    );
  }
}

export default RestaurantList;
