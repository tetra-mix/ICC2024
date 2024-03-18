import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase/auth';
import { UserContext } from './UserContext';
import logo from '../assets/title_black.png'

function Header() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    
    return (
        <section className="border flex p-3 justify-around items-center bg-tea-600">
            <img src={logo} className="size-1/4" />
            <div>
                {
                    user
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