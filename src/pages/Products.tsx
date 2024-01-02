import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductTag } from '../components/product_tag'
import { AuthState, logout } from '../firebase/auth'
import styles from './app.module.scss'

function Products () {

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
                                <button onClick={() => { navigate('/account') }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">アカウント</button>
                                <button onClick={() => { logout(); alert("ログアウトしました。"); }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログアウト</button>
                            </>
                            :
                            <>
                                <button onClick={() => { navigate('/login') }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">ログイン</button>
                                <button onClick={() => { navigate('/register') }} className="bg-white text-black border-0 rounded-md hover:bg-tea-100 hover:text-white p-2 mr-2">新規登録</button>
                            </>
                    }
                </div>
            </section>
            <section className="flex flex-row p-3">
                <h3 className={styles.title}>商品一覧</h3>
                <ProductTag />
            </section>
        </>
    );
}

export default Products;