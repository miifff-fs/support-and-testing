function getUserName(user) {
  console.log(user);
  debugger;

  return user.name.toUpperCase();
}

function showUser(user) {
  console.log(user);

  const name = getUserName(user);
  console.log(name);
}

showUser();

// Симптом: в консоли появляется TypeError, потому что код пытается прочитать
// свойство name у undefined.
// Причина: showUser вызвана без аргумента, поэтому user внутри getUserName
// равен undefined.
// Ошибка возникает в строке: return user.name.toUpperCase();
// Избежать ошибки можно проверкой данных до вызова getUserName или внутри неё.
