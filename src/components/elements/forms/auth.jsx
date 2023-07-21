import style from './auth.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateAccount } from '../../../helpers/helpers';

function Authorization() {
  const alertEmptyPass = <p className={style.alertInputPass}>Поле не должно быть пустым</p>;
  const alertEmptyLogin = <p className={style.alertInputLogin}>Поле не должно быть пустым</p>;
  const alertAuthorFailed = <p className={style.alertInputs}>Логин или пароль неверен</p>;
  const normInput = '';

  const [pass, setPass] = useState('');
  const inputPass = (e) => {
    setPass(e.target.value);
  }
  const [login, setLogin] = useState('');
  const inputLogin = (e) => {
    setLogin(e.target.value);
  }
  const [checkBox, setCheckBox] = useState('');
  const inputCheckBox = (e) => {
    setCheckBox(e.target.value);
  }

  const navigation = useNavigate()

  let key = 'usersData';
  let usersData = [];

  const [isAuthorizated, setIsAuthorizated] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (localStorage.getItem(key)) {
      usersData = JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(usersData));
    }
    if (validateAccount(login, pass, usersData) !== -1) {
      usersData = JSON.parse(localStorage.getItem(key));
      let index = validateAccount(login, pass, usersData)
      usersData[index] = {
        login: login,
        pass: pass,
        checkBox: checkBox,
      }
      localStorage.setItem(key, JSON.stringify(usersData));
      navigation('/products')
    } else {
      setIsAuthorizated(prevState => !prevState)
      navigation('/')
    }
  }

  return (
    <div>
      <form className={style.author_form}>
        <h1 className={style.author_form__title}>Вход</h1>
        <div className={style.author_form__inner}>
          <input type="email" className={style.author_form__place} id="author_email" placeholder="Логин" onChange={inputLogin} />
          {login.length === 0 ? alertEmptyLogin : normInput}
          <input type="password" className={style.author_form__place} id="author_password" placeholder="Пароль" onChange={inputPass} />
          {pass.length === 0 ? alertEmptyPass : normInput}
          <input type="checkbox" className={style.author_form__cb} id="author_cb" onChange={inputCheckBox} />
          <label htmlFor="author_cb" className={style.author_form__agreement}>Я согласен получать обновления на почту
          </label>
          {isAuthorizated ? alertAuthorFailed : normInput}
        </div>
        <input type="button" className={style.author_form__btn} id="author_btn" value="Войти" onClick={handleClick} />
      </form>
    </div>
  )
}

export default Authorization;