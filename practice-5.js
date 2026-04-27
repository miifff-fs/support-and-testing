const app = document.querySelector('#app');

let state = {
  isTextVisible: true,
  count: 0,
};

function render() {
  app.innerHTML = '';

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Показать/Скрыть текст';
  toggleButton.addEventListener('click', () => {
    state.isTextVisible = !state.isTextVisible;
    render();
  });

  app.appendChild(toggleButton);

  if (state.isTextVisible) {
    const text = document.createElement('p');
    text.textContent = 'Текст';
    app.appendChild(text);
  }

  const counter = document.createElement('div');

  const minusButton = document.createElement('button');
  minusButton.textContent = '-';
  minusButton.addEventListener('click', () => {
    state.count -= 1;
    render();
  });

  const value = document.createElement('span');
  value.textContent = state.count;

  const plusButton = document.createElement('button');
  plusButton.textContent = '+';
  plusButton.addEventListener('click', () => {
    state.count += 1;
    render();
  });

  counter.appendChild(minusButton);
  counter.appendChild(value);
  counter.appendChild(plusButton);
  app.appendChild(counter);
}

render();
