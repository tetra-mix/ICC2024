import { getAllProducts } from '../firebase/strorage';

export const ProductTag = () => {
    const productslist = getAllProducts();

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            <div className="rounded-md border-black m-2 p-5 bg-tea-20 border-2 border-tea-600">
                <h1 className="text-xl">商品名: <span className='text-2xl font-bold'>伊勢茶</span></h1>
                <h3 className="text-lg">値段:</h3>
                <h3 className="text-lg">種類:</h3>
                <img src="/testimage.png" />
                <h3 className="text-lg">説明:</h3>
                <p className="p-2">
                    テスト
                </p>
            </div >
            <div className="rounded-md border-black m-2 p-5 bg-tea-20 border-2 border-tea-600">
                <h1 className="text-xl">商品名: <span className='text-2xl font-bold'>伊勢茶</span></h1>
                <h3 className="text-lg">値段:</h3>
                <h3 className="text-lg">種類:</h3>
                <img src="/testimage.png" />
                <h3 className="text-lg">説明:</h3>
                <p className="p-2">
                    テスト
                </p>
            </div >
            <div className="rounded-md border-black m-2 p-5 bg-tea-20 border-2 border-tea-600">
                <h1 className="text-xl">商品名: <span className='text-2xl font-bold'>伊勢茶</span></h1>
                <h3 className="text-lg">値段:</h3>
                <h3 className="text-lg">種類:</h3>
                <img src="/testimage.png" />
                <h3 className="text-lg">説明:</h3>
                <p className="p-2">
                    テスト
                </p>
            </div >
        </div>
    );

}