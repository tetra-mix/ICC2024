import Header from '../../components/Header';
import styles from '../../scss/app.module.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logout } from '../../firebase/auth';
import { UserContext } from '../../components/UserContext';
export default function Account() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    
    return (
        <>
            <Header />
            <section className="p-10 bg-tea-10">
                <h3 className={styles.title}>アカウント情報</h3>
                <div className="m-5 p-5s lg:text-2xl sm:text-lg grid grid-rows-3 grid-flow-col gap-4">
                    <div><p>ユーザー名</p></div>
                    <div><p>メールアドレス</p></div>
                    <div><p>パスワード</p></div>
                    <div><p>{user?.name}</p></div>
                    <div><p>{user?.email}</p></div>
                    <div><p className='text-base'>表示されません。変更は「編集ボタン」から</p></div>
                    <div><button onClick={() => { }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">編集</button></div>
                    <div><button onClick={() => { }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">編集</button></div>
                    <div><button onClick={() => { }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">編集</button></div>
                </div>
                <div className='md:p-5 text-center grid gap-4 sm:pb-5 grid-cols-2 md:grid-cols-4 grid-rows-1'>
                    <div className='hidden'></div>
                    <button onClick={() => { }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">アカウント削除</button>
                    <button onClick={() => { navigate("/");  logout(); }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログアウト</button>
                    <div className='md:hidden'></div>
                </div>
            </section>
            <section className="p-10 bg-white">
                <h3 className={styles.title}>お気に入りリスト</h3>
                <div className="m-5 p-5s lg:text-2xl sm:text-lg">
                    
                </div>
                <h3 className={styles.title}>購入リスト</h3>
                <div className="m-5 p-5s lg:text-2xl sm:text-lg">

                </div>
                <h3 className={styles.title}>今までの投稿</h3>
                <div className="m-5 p-5s lg:text-2xl sm:text-lg">

                </div>
                <div className="text-center">
                    <button onClick={() => { navigate("/") }} className="bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2">トップページへ戻る</button>
                </div>
            </section>
        </>
    );
}