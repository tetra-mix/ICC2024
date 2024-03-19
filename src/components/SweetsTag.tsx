import sweets from '../assets/summer.png';
import { useNavigate } from 'react-router-dom';

export default function SweetsTag () {
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-2 gap-2'>
            <div onClick={ () => navigate("/item/sweets/") } className="rounded-md border-black m-2 p-2 bg-tea-20 border-2 border-tea-600">
                <h1 className="text-md">商品名: <span className='text-xl font-bold'>お菓子</span></h1>
                <h3 className="text-md">値段: 10000 円</h3>
                <h3 className="text-md">種類: 団子</h3>
                <img src={sweets} />
                <h3 className="text-md">説明:</h3>
                <p className="p-2">
                    おいしいお菓子です。
                </p>
            </div >
        </div>
    );
}