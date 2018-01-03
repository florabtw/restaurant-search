import { h, Component } from 'preact';

import starFull from '../../assets/icons/star-full.png';
import starEmpty from '../../assets/icons/star-empty.png';

const $fullStars = [1, 2, 3, 4, 5].map(a => {
  return <img src={starFull} alt="full star" class="star" />;
});

const $emptyStars = [1, 2, 3, 4, 5].map(_ => (
  <img src={starEmpty} alt="full star" class="star" />
));

class Stars extends Component {
  render() {
    const { rating } = this.props;
    const stars = Math.floor(rating);

    return (
      <div class="stars">
        {$fullStars.slice(0, stars)}
        {$emptyStars.slice(stars)}
      </div>
    );
  }
}

export default Stars;
