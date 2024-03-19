import Header from '../../components/Header';
import tea from '../../assets/tea.png';
import Subtitle from '../../components/Subtitle';
import SweetsTag from '../../components/SweetsTag';
export default function SweetsItem() {
    return (
        <>
            <Header />
            <section>
                <div className='p-10 bg-tea-0'>
                    <h2 className="font-bold text-2xl border-l-8 border-tea-600 pl-4 pb-1">商品情報</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src={tea} />
                    </div>
                    <div className='grid grid-rows-2 gap-4'>
                        <div className='basis-2/3'>
                            <h2 className="pb-2 text-2xl">商品名: <span className='text-3xl font-bold'>お茶</span></h2>
                            <h2 className="pb-2 text-xl">値段: 1000 円</h2>
                            <h2 className="pb-2 text-xl">種類: 団子</h2>
                        </div>
                    </div>
                </div>
                <Subtitle text='こちらの商品におすすめ'/>
                <SweetsTag />
                <Subtitle text='詳細' />
                <div className="p-5">
                    <h3 className="text-2xl font-bold">説明</h3>
                    <p className="text-xl p-1">
                        おいしいお茶です。
                    </p>
                </div>
                <Subtitle text='アンケート'/>
                <div className="p-5">
                    <h3 className="text-2xl font-bold">説明</h3>
                    <p className="text-xl p-1">
                        ご購入されたお客様には商品についてのアンケートにご協力をお願いします。

                    </p>
                </div>
                <div className='pt-10 grid grid-cols-3 gap-3'>
                    <div className=''>
                        <button className={`w-full center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 hover:bg-tea-400 hover:text-white`}>
                            リストに追加
                        </button>
                    </div>
                    <div className=''>
                        <button className={`w-full center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 hover:bg-tea-400 hover:text-white`}>
                            購入
                        </button>
                    </div>
                    <div className=''>
                        <button className={`w-full center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 hover:bg-tea-400 hover:text-white`}>
                            ギフト購入
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

