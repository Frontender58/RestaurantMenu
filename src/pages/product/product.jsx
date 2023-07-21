import ButtonBack from '../../components/UI/buttonBack/buttonBack';
import style from './product.module.scss';
import { useDispatch } from 'react-redux';
import { addProductBasket } from '../../store/reducers/products'
import uuid from 'react-uuid';
import { NumberWithSpaces } from '../../helpers/helpers';
import { useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';
import BasketPreview from '../../components/elements/basketPreview/basketPreview';
 

function Product(id) {

  const productId = useParams();

  const products = useSelector(state => state.products.products)

  const dispatch = useDispatch()

  const addProduct = (event) => {
    event.stopPropagation();
    const item = {
      id: id,
      idx: uuid(),
      url: url,
      title: title,
      price: price
    }
    dispatch(addProductBasket(item))
  }

  const url = products.filter((product) => product.id == productId.id).map((product) => product.url)
  const title = products.filter((product) => product.id == productId.id).map((product) => product.title)
  const desc = products.filter((product) => product.id == productId.id).map((product) => product.desc)
  const weight = products.filter((product) => product.id == productId.id).map((product) => product.weight)
  const middlePrice = products.filter((product) => product.id == productId.id).map((product) => product.price);
  const price = middlePrice[0]
  const finalPrice = NumberWithSpaces(price)


  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <header className={style.header}>
          <ButtonBack />
          <BasketPreview />
        </header>
        <main className={style.main}>
          <img src={url} alt='' className={style.pic}/>
          <div className={style.inner}>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.desc}>{desc}</div>
            <div className={style.bottom}>
              <div className={style.price}>{finalPrice} ₽ </div>
              <div className={style.weight}> / {weight}  г.</div>
              <button className={style.btnBasket}
              onClick={addProduct}
              >В корзину</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Product;
