import Base from '../components/Base';
import TeaTag from '../components/TeaTag.tsx';
import SetsTag from '../components/SetsTag.tsx';
import Subtitle from '../components/Subtitle';
import Search from '../components/TeaSearch.tsx';
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

function Tea() {

  const { user } = useContext(UserContext);

  return (
    <>
      <Base text={"お茶"} subtext={"このページでは、全国各地のお茶を購入することができます。ごゆっくり。"} image_={false} />
      <section className='pt-5 bg-tea-0'>
        <Subtitle text={"絞り込み"} />
        <Search />
        <Subtitle text={"おすすめ"} />
        
        <Subtitle text={"セット"} />
        <SetsTag />
        <Subtitle text={"一覧"} />
        <TeaTag />
      </section>
    </>
  )
}

export default Tea;
