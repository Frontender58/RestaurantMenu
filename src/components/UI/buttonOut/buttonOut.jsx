import style from './buttonOut.module.css';
import { Link } from "react-router-dom"

function ButtonOut() {
  return (
    <div className={style.btn}>
      <Link to={'/'}>
        <button className={style.btnOut}>Выйти</button>
      </Link>
    </div>
  )
}

export default ButtonOut;