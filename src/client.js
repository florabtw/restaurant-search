import algolia from 'algoliasearch/lite';
import algoliahelper from 'algoliasearch-helper';

const client = algolia('NQGVMY8DAW', 'e0d1c5d72ec6979634b615f436b54b3c');

export default client;

export const restaurantIndex = algoliahelper(client, 'restaurants');
