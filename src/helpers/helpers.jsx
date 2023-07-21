//Форматирование чисел с добавлением пробелов
export const NumberWithSpaces = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


//Сохранение регистрационных данных
export const saveNewUser = (usersData, key, login, pass, checkBox) => {

  const newUser = {
    login: login,
    pass: pass,
    checkBox: checkBox,
  }

  usersData.push(newUser);
  localStorage.setItem(key, JSON.stringify(usersData));
}


// Поиск повторяющейся учётной записи
export function validateNewAccount(login, usersData) {
  let index = usersData.findIndex(item => item.login === login);
  return index
}

export function validateAccount(login, pass, usersData) {
  let index = usersData.findIndex((item => item.login === login) && (item => item.pass === pass));
  return index
}




