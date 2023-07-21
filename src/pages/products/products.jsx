import style from './products.module.css';
import { useSelector } from 'react-redux';
import Card from '../../components/elements/cards/card';
import BasketPreview from '../../components/elements/basketPreview/basketPreview';


function Products() {
  
  const products = useSelector(state => state.products.products)

  return (
    <main className={style.main}>
      <div className={style.container}>
        <header className={style.header}>
          <h1 className={style.headerTitle}>НАША ПРОДУКЦИЯ</h1>
          <BasketPreview />
        </header>
        <div className={style.productsList}>
          {products.map(item => {
            return (
              <Card
                key={item.id}
                id={item.id}
                url={item.url}
                title={item.title}
                desc={item.desc}
                price={item.price}
                weight={item.weight}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Products;

