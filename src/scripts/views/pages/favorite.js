import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Your Favorite Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurant.length === 0) {
      document.querySelector('.content').innerHTML = '<h1 class="text-center">Tidak ada restaurant favorite ):</h1>';
    }

    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
