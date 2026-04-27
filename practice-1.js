function calculateTotal(price, quantity = 1) {
  return price * quantity;
}

function testCalculateTotal() {
  const result1 = calculateTotal(100, 2);
  if (result1 !== 200) {
    throw new Error(`Expected 200, but got ${result1}`);
  }

  const result2 = calculateTotal(100);
  if (result2 !== 100) {
    throw new Error(`Expected 100, but got ${result2}`);
  }

  const result3 = calculateTotal(100, 0);
  if (result3 !== 0) {
    throw new Error(`Expected 0, but got ${result3}`);
  }

  console.log('All tests passed');
}

testCalculateTotal();

// Граничные случаи:
// отрицательную цену нельзя допускать до расчёта
// quantity = 0 означает итог 0
// проверки могут быть внутри функции или перед её вызовом, но место проверки
// должно быть единым и понятным для проекта.