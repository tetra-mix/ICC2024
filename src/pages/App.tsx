import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthState, logout } from '../firebase/auth'
import styles from './app.module.scss'

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
      <section className="border flex p-3 justify-around items-center bg-tea-500">
        <h1 className="text-4xl font-bold text-white">
          [サービス名]
        </h1>
        <div>
          {
            currentUser
            ?
            <>
              <button onClick={() => {navigate('/account')}} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">アカウント</button>
              <button onClick={() => {logout(); alert("ログアウトしました。"); }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログアウト</button>
            </>
            :
            <>
              <button onClick={() => {navigate('/login')}} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログイン</button>
              <button onClick={() => {navigate('/register')}} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">新規登録</button>   
            </>
            }
        </div>
      </section>
      <section className="flex flex-row p-10 bg-tea-10">
        <div className="basis-1/2">
          <h2 className="text-black text-lg md:text-3xl">新たなお茶に出会える<br />レコメンドサービス「サービス名」</h2>
        </div>
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
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
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>口コミ</h3>
      </section>
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>ランキング</h3>
      </section>
    </>
  )
}

export default App
