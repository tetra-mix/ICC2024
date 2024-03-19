import Base from '../components/Base';
import SweetsTag from '../components/SweetsTag.tsx';
import SweetsSearch from '../components/SweetsSearch.tsx';
import SetsTag from '../components/SetsTag.tsx';
import Subtitle from '../components/Subtitle';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function Sweets() {


  return (
    <>
      <Base text={"お菓子"} subtext={"このページでは、全国各地のお菓子を購入することができます。ごゆっくり。"} image_={false} />
      <section className='pt-5 bg-tea-0'>
        <Subtitle text={"絞り込み"} />
        <SweetsSearch />
        <Subtitle text={"おすすめ"} />
        
        <Subtitle text={"セット"} />
        <SetsTag />
        <Subtitle text={"一覧"} />
        <SweetsTag />
      </section>
    </>
  )
}

export default Sweets;