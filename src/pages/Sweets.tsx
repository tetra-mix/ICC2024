import styles from '../scss/app.module.scss';
import Base from '../components/Base';
import SweetsTag from '../components/SweetsTag.tsx';
import Subtitle from '../components/Subtitle';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function Sweets() {

  const { user } = useContext(UserContext);

  return (
    <>
      <Base text={"お菓子"} subtext={"このページでは、全国各地のお菓子を購入することができます。ごゆっくり。"} image_={false} />
      <section className='m-10'>
        <Subtitle text={"絞り込み"} />
        <h3 className={styles.title}>商品一覧</h3>
        <p className='p-5 font-bold'>クリック/タップで詳細ページに移動します。</p>
        <SweetsTag />
      </section>
    </>
  )
}

export default Sweets;