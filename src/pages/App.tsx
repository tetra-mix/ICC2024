import styles from '../scss/app.module.scss'
import { ProductTag } from "../components/Product_tag";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function App() {

  const { user } = useContext(UserContext);

  return (
    <>
      <section className='m-10'>
        <h3 className={styles.title}>商品一覧</h3>
        <p className='p-5 font-bold'>クリック/タップで詳細ページに移動します。</p>
        {
          <ProductTag />
        }
      </section>
    </>
  )
}

export default App
