import style from './basket.module.css';
import CardBasket from '../../components/elements/cardsBasket/cardBasket';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NumberWithSpaces } from '../../helpers/helpers';
import ButtonOut from '../../components/UI/buttonOut/buttonOut';
import ButtonBack from '../../components/UI/buttonBack/buttonBack';
import { cleanProductsBasket } from '../../store/reducers/products';

function Basket() {

  const productsBasket = useSelector(state => state.products.basketProducts);
  const cost = useSelector(state => state.products.totalCost);
  const finalCost = NumberWithSpaces(cost); 

  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(cleanProductsBasket());
  }

  const doOrder = () => {
    alert('Заказ оформлен');
    removeAll();
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <header className={style.header}>
          <ButtonBack />
          <h1 className={style.title}>
            Корзина с выбранными товарами
          </h1>
          <ButtonOut />
        </header>
        <main className={style.list}>
        {productsBasket.map(item => {
            return (
              <CardBasket
                key={item.idx}
                id={item.idx}
                prodId={item.id}
                url={item.url}
                title={item.title}
                price={item.price}
              />
            )
          })}
        </main>
      </div>
      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.footerText}>
            Заказ на сумму:        
            <span className={style.total}>
              {finalCost} ₽
            </span>
          </div>
          <button className={style.btnOrder} onClick={doOrder} >
            Оформить заказ
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Basket;