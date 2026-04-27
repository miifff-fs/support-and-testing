const products = [
  { name: 'Ноутбук', price: 1000, category: 'tech' },
  { name: 'Мышь', price: 50, category: 'tech' },
  { name: 'Книга', price: 30, category: 'books' },
  { name: 'Монитор', price: 300, category: 'tech' },
  { name: 'Тетрадь', price: 10, category: 'books' },
];

const expensiveProducts = products.filter((product) => product.price > 100);
const productNames = products.map((product) => product.name);
const monitor = products.find((product) => product.name === 'Монитор');
const productsWithIncreasedPrice = products.map((product) => {
  return {
    ...product,
    price: product.price * 1.2,
  };
});

console.log(expensiveProducts);
console.log(productNames);
console.log(monitor);
console.log(productsWithIncreasedPrice);
