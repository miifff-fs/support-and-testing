const app = document.querySelector('#app');

let state = {
  users: [],
  isLoading: true,
  error: null,
};

function render() {
  app.innerHTML = '';

  if (state.isLoading) {
    app.textContent = 'Загрузка...';
    return;
  }

  if (state.error) {
    app.textContent = 'Ошибка загрузки данных';
    return;
  }

  const list = document.createElement('ul');

  state.users.forEach((user) => {
    const item = document.createElement('li');
    item.textContent = user.name;
    list.appendChild(item);
  });

  app.appendChild(list);
}

function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }

      return response.json();
    })
    .then((users) => {
      state.users = users;
      state.isLoading = false;
      render();
    })
    .catch((error) => {
      state.error = error;
      state.isLoading = false;
      render();
    });
}

render();
loadUsers();
