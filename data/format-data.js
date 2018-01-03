const fs = require('fs');

const restaurantData = JSON.parse(
  fs.readFileSync('./input/restaurants_list.json', 'utf8')
);

const restaurantMap = restaurantData.reduce(
  (map, restaurant) => map.set(restaurant.objectID, restaurant),
  new Map()
);

const csvString = fs.readFileSync('./input/restaurants_info.csv', 'utf8');

const restaurantList = csvString
  .split('\n')
  .slice(1)
  .map(line => line.split(';'))
  .filter(line => line.length > 1);

// objectID;food_type;stars_count;reviews_count;neighborhood;phone_number;price_range;dining_style
function createRestaurant(line) {
  const opentableData = restaurantMap.get(Number(line[0]));

  const paymentOptions = opentableData.payment_options
    .map(toValidPayment)
    .filter(isValidPayment);

  return {
    area: opentableData.area,
    city: opentableData.city,
    cuisine: line[1],
    objectID: line[0],
    image: opentableData.image_url,
    location: opentableData._geoloc,
    name: opentableData.name,
    neighborhood: line[4],
    paymentOptions: [...new Set(paymentOptions)],
    prices: line[6],
    rating: Number(line[2]),
    reviews: Number(line[3])
  };
}

function toValidPayment(payment) {
  if (payment === 'Carte Blanche') return 'Discover';
  if (payment === 'Diners Club') return 'Discover';
  return payment;
}

function isValidPayment(payment) {
  return (
    payment === 'AMEX' ||
    payment === 'Discover' ||
    payment === 'Mastercard' ||
    payment === 'Visa'
  );
}

const restaurants = [];

for (line of restaurantList) {
  restaurants.push(createRestaurant(line));
}

fs.writeFileSync('./output/restaurants.json', JSON.stringify(restaurants));
