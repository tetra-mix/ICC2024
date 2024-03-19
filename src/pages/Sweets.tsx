import Base from '../components/Base';
import SweetsTag from '../components/SweetsTag.tsx';
import Search from '../components/TeaSearch.tsx';
import TeaTag from '../components/TeaTag.tsx';
import Subtitle from '../components/Subtitle';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function Sweets() {

  const { user } = useContext(UserContext);

  return (
    <>
      <Base text={"お菓子"} subtext={"このページでは、全国各地のお菓子を購入することができます。ごゆっくり。"} image_={false} />
      <section className='pt-5'>
        <Subtitle text={"絞り込み"} />
        <Search />
        <Subtitle text={"おすすめ"} />
        
        <Subtitle text={"セット"} />

        <Subtitle text={"一覧"} />
        <SweetsTag />
      </section>
    </>
  )
}

export default Sweets;