import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Home</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
