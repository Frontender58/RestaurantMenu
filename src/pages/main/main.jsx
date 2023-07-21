import style from './main.module.scss'
import { useState } from 'react';
import Registration from '../../components/elements/forms/reg';
import Authorization from '../../components/elements/forms/auth';

function Main() {
  const [isRegForm, setIsRegForm] = useState(true)

  const handleClick = () => {
    setIsRegForm(prevState => !prevState);
    };

  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div className={style.small} onClick={handleClick}>
          {isRegForm ? 
        'Зарегистрироваться'
        :
        'Авторизоваться'
        }
        </div>
        {isRegForm ? 
        <Authorization />
        :
        <Registration /> 
        }
      </div>
    </div>
  )
}

export default Main;