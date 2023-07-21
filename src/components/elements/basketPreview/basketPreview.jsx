import style from './basketPreview.module.scss';
import ButtonOut from '../../UI/buttonOut/buttonOut';
import { NumberWithSpaces } from '../../../helpers/helpers';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


function BasketPreview() {

  const count = useSelector(state => state.products.countProducts);
  const cost = useSelector(state => state.products.totalCost);
  const finalCost = NumberWithSpaces(cost);

  let textProducts;

  if (count === 1) {
    textProducts = 'товар';
  } else if (count >= 2 && count <= 4) {
    textProducts = 'товара';
  } else {
    textProducts = 'товаров';
  }
  return (
    <div className={style.headerBasket}>
      <div className={style.headerBasketText}>
        {count} {textProducts} <br />
        на сумму {finalCost} ₽
      </div>
      <Link to={"/basket"}>
        <div className={style.headerBasketBtn}>
          <img src='/images/Vector.png' alt='' className={style.headerBasketPic} />
        </div>
      </Link>
      <ButtonOut />
    </div>
  )
}

export default BasketPreview;