import Header from '../components/Header';
import { Link } from 'react-router-dom';
function Error() {
    return (
        <>
            <Header />
            <section className="p-10 bg-tea-10">
                <h1 className="p-5 m-5 text-black text-4xl">
                    エラーが発生しました。<br />
                    再度お試しください。
                </h1>
                <Link to="/" className="center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white">
                    トップページに戻る
                </Link>
            </section>
        </>
    );
}

export default Error;