const getOrderData = () => {
  return {
    price: Number(document.querySelector('#price').value),
    quantity: Number(document.querySelector('#quantity').value),
  };
};

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

const applyDiscount = (total, discount = 0.1) => {
  if (total > 1000) {
    return total - total * discount;
  }

  return total;
};

const renderTotal = (total) => {
  document.querySelector('#result').textContent = total;
};

function handleClick() {
  const order = getOrderData();
  const total = calculateTotal(order.price, order.quantity);
  const finalTotal = applyDiscount(total);

  renderTotal(finalTotal);
  console.log('Готово');
}

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', handleClick);

// Что стало лучше:
// расчёт и скидка не зависят от DOM;
// каждая функция отвечает за одну задачу;
// код проще проверять и менять.

// Практика №2
// Проблема исходного кода: addToCart менял глобальный cartTotal и сразу
// обновлял DOM. Если cartTotal изменить в другом месте, итог станет
// непредсказуемым.

let cartState = {
  total: 0,
};

function addToCart(state, price) {
  return {
    total: state.total + price,
  };
}

function renderCartTotal(state) {
  document.querySelector('#total').textContent = state.total;
}

function handleAddToCart(price) {
  cartState = addToCart(cartState, price);
  renderCartTotal(cartState);
}

const addToCartButton = document.querySelector('#add-to-cart');
addToCartButton.addEventListener('click', () => {
  handleAddToCart(100);
});

renderCartTotal(cartState);
