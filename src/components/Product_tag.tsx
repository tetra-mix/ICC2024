import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllProducts } from '../firebase/strorage';
import { productI } from '../types/products';

export const ProductTag = () => {
    const [products, setProducts] = useState<productI[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const productslist = getAllProducts().then((ps) => {

            ps.map((product: any) => {
                console.log
                const p =
                {
                    id: product.id,
                    title: product.title,
                    kind: product.kind,
                    price: product.price,
                    description: product.description,
                    questionnaire: product.questionnaire,
                    data: {
                        small: product.data.small,
                        taste: product.data.taste,
                        feel: product.data.feel,
                        when: product.data.when,
                    },
                    imageURL: product.imageURL,
                };
                const newProducts = products.concat(p);

                console.log(products)
                setProducts(newProducts);
            });
        });

        return () => {
            productslist;
        }
    }, [])

    const handleClick = (product: productI) => {
        navigate('/product', { state: { product: product } });
    }


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {products.map((product) => (
                <div onClick={() => { handleClick(product) }} className="rounded-md border-black m-2 p-5 bg-tea-20 border-2 border-tea-600">
                    <h1 className="text-xl">商品名: <span className='text-2xl font-bold'>{product.title}</span></h1>
                    <h3 className="text-lg">値段: {product.price} 円</h3>
                    <h3 className="text-lg">種類: {product.kind}</h3>
                    <img src={product.imageURL} />
                    <h3 className="text-lg">説明:</h3>
                    <p className="p-2">
                        {product.description}
                    </p>
                </div >
            ))}
        </div>
    );

    /*
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
        */
}