import styles from '../scss/app.module.scss'
import Base from '../components/Base';
import { ProductTag } from "../components/Product_tag";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';
function Top() {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Base text={"さあ、新しい出会いへ。"} image_={true} />
      <section className='m-10 text-lg bg-tea-0'>
        <p className='pb-10'>
          いらっしゃい！<br />
          TEA茶erは新たなお茶に出会えるサービスです。
        </p>
        <p className='pb-10'>
          ここでは全国各地のお茶、和菓子を購入できます。ここだけのお得なセットも...?
        </p>
        <p className='pb-10'>
          普段味わうことのできないお茶たちでゆっくり休んでいきましょう！
        </p>
        <div className="grid gap-2 grid-cols-2">
          <div>
            <button onClick={() => { navigate('/Tea') }} className="w-full bg-tea-600 text-black border-0 rounded-md hover:bg-tea-100 hover:text-black p-2 mr-2">お茶</button>
          </div>
          <div>
            <button onClick={() => { navigate('/Sweets') }} className="w-full bg-tea-600 text-black border-0 rounded-md hover:bg-tea-100 hover:text-black p-2 mr-2">お菓子</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Top
