// Function from 1 homework

const MARSHMALLOW_PRICE = 15.678;
const CHOCOLATE_CAKE_PRICE = 123.965;
const CHEESECAKE_PRICE = 90.2345;

export default function getAveragePrice() {
  let totalPrice = +MARSHMALLOW_PRICE + CHOCOLATE_CAKE_PRICE + CHEESECAKE_PRICE;
  let averagePrice = +(totalPrice / 3).toFixed(2);
  document.querySelector(
    ".output1"
  ).innerHTML = `Average price:  ${averagePrice}`;
}
