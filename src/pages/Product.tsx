import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useEffect} from 'react';

import Header from '../components/Header';
import Questionnaire from './ Questionnaire';
import { productI } from "../types/products";


function Product() {
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state;
    if (product == undefined) {
        navigate('/');
    }
    const p: productI = {
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
    }

    useEffect(() => {
        if (product == undefined)
            navigate("/error");
    }, [product]);

    return (
        <>
            <Header />
            <section>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <img src={p.imageURL} />
                    </div>
                    <div className='grid grid-rows-2 gap-4'>
                        <div className='basis-2/3'>
                            <h1 className="p-2 text-2xl">商品名: <span className='text-3xl font-bold'>{p.title}</span></h1>
                            <h2 className="pb-2 text-xl">値段: {p.price} 円</h2>
                            <h2 className="pb-2 text-xl">種類: {p.kind}</h2>
                            <h2 className='pb-2 text-xl'>説明:</h2>
                            <p>
                                {p.description}
                            </p>
                        </div>
                        <div className='basis-1/3'>
                            <Link to="/" className="center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white">
                                トップページに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Questionnaire product={product} />
        </>
    );
}

export default Product;