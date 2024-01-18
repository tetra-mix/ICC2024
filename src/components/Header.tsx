import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthState, logout } from '../firebase/auth';


function Header() {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = AuthState((user) => {
            setCurrentUser(user);
        });
        return () => { unsubscribe; };
    }, [])

    return (
        <section className="border flex p-3 justify-around items-center bg-tea-600">
            <img src="/logo.png" className="size-1/4" />
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
    );
}

export default Header;