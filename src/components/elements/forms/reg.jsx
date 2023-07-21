import style from './reg.module.scss';
import { useState } from 'react';
import { saveNewUser, validateNewAccount } from '../../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const minInputLength = 4;
  const alertPassLength = <p className={style.alertInputPass}>Пароль должен содержать не менее 4-х символов</p>;
  const alertLoginLength = <p className={style.alertInputLogin}>Логин должен содержать не менее 4-х символов</p>;
  const alertEmptyPass = <p className={style.alertInputPass}>Поле не должно быть пустым</p>;
  const alertEmptyLogin = <p className={style.alertInputLogin}>Поле не должно быть пустым</p>;
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

  const navigation = useNavigate();

  let key = 'usersData';
  let usersData = [];

  const registrate = () => {
      if (localStorage.getItem(key)) {
        usersData = JSON.parse(localStorage.getItem(key))
      } else {
        localStorage.setItem(key, JSON.stringify(usersData))
      }
      if (validateNewAccount(login, usersData) === -1) {
        saveNewUser(usersData, key, login, pass, checkBox)
      } else {
        usersData = JSON.parse(localStorage.getItem(key));
        let index = validateNewAccount(login, usersData)
        usersData[index] = {
          login: login,
          pass: pass,
          checkBox: checkBox,
        }
        localStorage.setItem(key, JSON.stringify(usersData))
      }
    }
  


  const handleClick = (event) => {
    event.preventDefault();
    if (login.length >= minInputLength && pass.length >= minInputLength) {
    registrate()
    navigation('/products')
    }
  }

  return (
    <div>
      <form className={style.registration_form}>
        <h1 className={style.registration_form__title}>
          Регистрация
        </h1>
        <div className={style.registration_form__inner}>
          <input type="email" className={style.registration_form__place} id="email" placeholder="Логин" onChange={inputLogin}/>
          {0 < login.length && login.length < minInputLength ? alertLoginLength : normInput}
          {login.length === 0 ? alertEmptyLogin : normInput}
          <input type="password" className={style.registration_form__place} id="password" placeholder="Пароль" onChange={inputPass}/>
          {0 < pass.length && pass.length < minInputLength ? alertPassLength : normInput}
          {pass.length === 0 ? alertEmptyPass : normInput}
          <input type="checkbox" className={style.registration_form__cb} id="cb" onChange={inputCheckBox}/>
          <label htmlFor="cb" className={style.registration_form__agreement} >Я согласен получать обновления на почту</label>
        </div>
        <input type="button" className={style.registration_form__btn} id="btn" value="Зарегистрироваться" onClick={handleClick}/>
      </form>
    </div>
  )
}

export default Registration;