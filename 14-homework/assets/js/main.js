Завдання 1:
Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3

function* createIdGenerator() {
  
}


Завдання 2 (advanced)
Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
Працювати генератор буде наступним чином:
const fontGenerator = newFontGenerator(14); // 14 – стартове значення
fontGenerator.next("up").value -> 14
fontGenerator.next("up").value -> 16
fontGenerator.next("up").value -> 18
fontGenerator.next().value -> 18
fontGenerator.next("down").value -> 16
fontGenerator.next("down").value -> 14
fontGenerator.next("down").value -> 12
fontGenerator.next().value -> 12