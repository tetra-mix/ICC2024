import styles from './app.module.scss'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthState } from '../firebase/auth';
import { ProductTag } from "../components/Product_tag";

function App() {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = AuthState((user) => {
      setCurrentUser(user);
    });
    return () => { unsubscribe; };
  }, [])


  return (
    <>
      <section className="border flex p-3 justify-around items-center bg-tea-600">

        <img className='size-2/5' src="/logo.png"></img>
        {
          /*
          <h1 className="text-4xl font-bold text-white">
            TEA茶er
          </h1>
          */
        }
        <div>
          <a href="/Login"><button className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログイン</button></a>
          <button className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 ml-2">新規登録</button>
          <a href="/PostKuchikomi"><button className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 ml-2">口コミを投稿</button></a>
        </div>
      </section>
      <section className="flex flex-row p-10 bg-tea-10">
        <div className="basis-2/3">
          <h2 className="text-black text-lg md:text-3xl">新たなお茶に出会える<br />レコメンドサービス「TEA茶er」</h2>
        </div>
        <div className="basis-1/3">
          <img className="" src="/icon.png"></img>
        </div>
      </section>
      <section className="">
        <div className="p-8 border">
          <h3 className="text-3xl">名前から検索</h3>
          <p>
            お茶の品種名を入力して検索することができます。
          </p>
          <div className='flex'>
            <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" />
            <button className="bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 w-1/4">検索</button>
          </div>
        </div>
      </section>
      <section className="flex flex-row">
        <div className="basis-1/2 p-8 border">
          <h3 className="text-2xl">おすすめ検索</h3>
          <p>
            登録された情報をもとにあなたに合うおすすめのお茶を紹介します。
          </p>
          <button className="bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2">検索へ</button>
        </div>
        <div className="basis-1/2 p-8 border">
          <h3 className="text-2xl">おすすめ登録</h3>
          <p className="p-2">
            あなたの情報を登録して、おすすめの精度を上げましょう。
          </p>
          <button className="bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2">登録へ進む</button>
        </div>
      </section>
      <section>
        <h3 className={styles.title}>商品一覧</h3>
        {
          currentUser && 
            <ProductTag/>
        }
      </section>
      { /*
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>口コミ</h3>
      </section>
      <ShowKuchikomi />
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>ランキング</h3>
      </section>
      <Ranking />
      */
      }
    </>
  )
}

export default App
