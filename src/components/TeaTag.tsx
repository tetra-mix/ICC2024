import tea from '../assets/tea.png';
import { useNavigate } from 'react-router-dom';

export default function TeaTag () {
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-2 gap-2'>
            <div onClick={ () => navigate("/item/tea/") } className="rounded-md border-black m-2 p-5 bg-tea-20 border-2 border-tea-600">
                <h1 className="text-md">商品名: <span className='text-xl font-bold'>伊勢茶</span></h1>
                <h3 className="text-md">値段: 10000 円</h3>
                <h3 className="text-md">種類: 煎茶</h3>
                <img src={tea} />
                <h3 className="text-md">説明:</h3>
                <p className="p-2">
                    おいしいお茶です。
                </p>
            </div >
        </div>
    );
}