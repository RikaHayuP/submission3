import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
  <img class="movie__poster lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Addres</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="resto-category">Kategori Masakan: ${restaurant.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>
          `,
    )
    .join('')}
      </div>
    </ul>
  </div>
        
      <h2 tabindex="0" id="restaurant-detail-form-review-title"></h2>
        <div class="menu-list">
          <div class="foods">
          <h3>Food <i class="fa fa-cutlery font-decoration"></i></h3>
          </hr>
            <ul class="restaurant-detail__foods">
              ${restaurant.menus.foods
    .map(
      (food) => `
              <li> ${food.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
          <div class="drinks">
          <h3>Drink <i class="fa fa-coffee font-decoration"></i></h3>
          </hr>
            <ul class="restaurant-detail__drinks">
              ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li> ${drink.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
        </div>
      <h2 tabindex="0" id="restaurant-detail-form-review-title"></h2>
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
          <h3>Reviews</h3>
            <div class="header-review">
              
              <i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
              <p class="date-review">${review.date}</p>
            </div>
            <div class="body-review">
              ${review.review}
            </div>
          </div>
          `,
    )
    .join('')}
        </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" alt="${restaurant.name}" crossorigin="anonymous"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 class="text-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
