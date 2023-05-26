const assert = require('assert');
Feature('Liking Restaurants');


Scenario('should show empty favorite restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content');
  I.wait(5);
  I.see('Tidak ada restaurant favorite ):', '.content');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#restaurants');

  const firstTitle = locate('.text-title a').first();
  const firstTitleText = await I.grabTextFrom('.text-title a');
  I.click(firstTitle);

  I.wait(5);
  I.click('#likeButton');

  I.wait(5);
  I.amOnPage('/#/favorite');
  const firstlikedRestaurantTitle = await I.grabTextFrom('.text-title a');

  assert.strictEqual(firstTitleText, firstlikedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    
    I.amOnPage('/');
    I.wait(5);
    I.seeElement('#restaurants');
  
    const firstTitle = locate('.text-title a').first();
    I.click(firstTitle);
  
    I.wait(5);
    I.click('#likeButton');
  
    I.wait(5);
    I.amOnPage('/#/favorite');
  

    I.amOnPage('/#/favorite');
    I.wait(5);
    const firstLikedCard = locate('.text-title a').first();
    I.click(firstLikedCard);
    I.wait(5);
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant favorite ):', '.content');
  });
