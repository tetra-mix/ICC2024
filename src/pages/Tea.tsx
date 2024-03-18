import styles from '../scss/app.module.scss'
import Base from '../components/Base';
import { ProductTag } from "../components/Product_tag";
import Subtitle from '../components/Subtitle';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function Top() {

  const { user } = useContext(UserContext);

  return (
    <>
      <Base text={"お茶"} subtext={"このページでは、全国各地のお茶を購入することができます。ごゆっくり。"} image_={false} />
      <section className='pt-5'>
        <Subtitle text={"絞り込み"} />
        <p className='p-5 font-bold'>クリック/タップで詳細ページに移動します。</p>
        {
          //  <ProductTag />
        }
        <Subtitle text={"おすすめ"} />
        <Subtitle text={"セット"} />
      </section>
    </>
  )
}

export default Top
