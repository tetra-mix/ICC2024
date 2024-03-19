import sweets from '../assets/summer.png';
import tea from '../assets/tea.png';

export default function SetsTag() {

    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className="rounded-md border-black m-2 p-2 bg-tea-200 border-2 border-tea-600">
                <h1 className="text-md">商品名: <span className='text-xl font-bold'>羊羹セット</span></h1>
                <h3 className="text-md">値段: 1000 + 800 円</h3>
                <div className='w-full grid grid-cols-2 gap-2'>
                    <div>
                        <img className='w-3/4' src={tea} />
                    </div>
                    <div>
                        <img className='w-3/4' src={sweets} />
                    </div>
                </div>
            </div >
        </div>
    );
}