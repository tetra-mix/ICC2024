import Header from '../../components/Header';
import tea from '../../assets/tea.png';

export default function SweetsItem() {
    return (
        <>
            <Header />
            <section>
                <div className='p-10'>
                    <h2>商品情報</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src={tea} />
                    </div>
                    <div className='grid grid-rows-2 gap-4'>
                        <div className='basis-2/3'>
                            <h1 className="p-2 text-2xl">商品名: <span className='text-3xl font-bold'>お菓子</span></h1>
                            <h2 className="pb-2 text-xl">値段: 10000 円</h2>
                            <h2 className="pb-2 text-xl">種類: 団子</h2>
                            <h2 className='pb-2 text-xl'>説明:</h2>
                            <p>
                                おいしいお菓子です。
                            </p>
                        </div>
                        <div className='basis-1/3'>
                            <div className='m-3'>
                                <button className={`center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white`}>
                                    欲しい物リストに追加
                                </button>
                            </div>
                            <div className='m-3'>
                                <button className={`center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white`}>
                                    購入済みにする
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

