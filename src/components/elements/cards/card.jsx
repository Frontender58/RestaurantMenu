import style from './card.module.css';
import { addProductsBasket} from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { NumberWithSpaces } from '../../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

function Card({ id, url, title, desc, price, weight }) {

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const addProduct = (event) => {
    event.stopPropagation();
    const item = {
      id: id,
      idx: uuid(),
      url: url,
      title: title,
      price: price
    }
    dispatch(addProductsBasket(item));
  }

  const finalPrice = NumberWithSpaces(price);

  const LinkProduct = () => {
    navigation(`/product/${id}`);
  }

  return (
    <div className={style.card} onClick={LinkProduct}>
      <img src={url} alt='' className={style.preview}/>
      <div className={style.text}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.desc}>{desc}</p>
      </div>
      <div className={style.bottom}>
        <div className={style.price}>{finalPrice} ₽ </div>
        <div className={style.weight}> / {weight} г.</div>
        <div className={style.btn} onClick={addProduct}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.btnPlus}>
            <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Card;


