const MARSHMALLOW_PRICE = 15.678;
const CHOCOLATE_CAKE_PRICE = 123.965;
const CHEESECAKE_PRICE = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число

let maxPrice = Math.max(
  MARSHMALLOW_PRICE,
  CHOCOLATE_CAKE_PRICE,
  CHEESECAKE_PRICE
);

console.log(maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число

let minPrice = Math.min(
  MARSHMALLOW_PRICE,
  CHOCOLATE_CAKE_PRICE,
  CHEESECAKE_PRICE
);

console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

let totalPrice = MARSHMALLOW_PRICE + CHOCOLATE_CAKE_PRICE + CHEESECAKE_PRICE;

console.log(totalPrice);

/* Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості
 кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону. */

let totalPriceTruncated =
  Math.trunc(MARSHMALLOW_PRICE) +
  Math.trunc(CHOCOLATE_CAKE_PRICE) +
  Math.trunc(CHEESECAKE_PRICE);

console.log(totalPriceTruncated);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)

let totalPriceRoundedToHundreds = Math.ceil(totalPrice / 100) * 100;

console.log(totalPriceRoundedToHundreds);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

console.log(Math.floor(totalPrice) % 2 === 0);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

let pay = 500;
const change = pay - totalPrice;

console.log(change);

// Виведіть середнє значення цін, округлене до другого знаку після коми

let averagePrice = (totalPrice / 3).toFixed(2);

console.log(averagePrice);

/*(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. */

let randomDiscount = Math.random().toFixed(2);
let totalPriceWithDiscount = (totalPrice * (1 - randomDiscount)).toFixed(2);

console.log(totalPriceWithDiscount);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let profit = (totalPriceWithDiscount - totalPrice / 2).toFixed(2);

console.log(profit);

// Advanced. Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині у вигляді одного рядка.
document.writeln(
  `Максимальна ціна: ${maxPrice};<br>
  Мінімальна ціна: ${minPrice};<br>
  Вартість всіх товарів: ${totalPrice};<br>
  Вартість всіх товарів без копійок: ${totalPriceTruncated} грн;<br>
  Вартість всіх товарів заокруглена до сотень: ${totalPriceRoundedToHundreds} грн;<br>
  Чи є парним числом сума всіх товарів: ${Math.floor(totalPrice) % 2 === 0};<br>
  Решта з 500грн: ${change} грн;<br>
  Середня ціна: ${averagePrice} грн;<br>
  Вартість всіх товарів зі знижкою  ${
    randomDiscount * 100
  } %: ${totalPriceWithDiscount} грн;<br>
  Чистий прибуток: ${profit} грн.`
);
