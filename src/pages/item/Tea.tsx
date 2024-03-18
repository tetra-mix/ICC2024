import styles from '../scss/app.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthState } from '../firebase/auth';
import Header from '../components/Header';
import Questionnaire from '../components/Questionnaire';
import { updataUser } from '../firebase/evaluate';
import { User } from 'firebase/auth';

function Product() {
    const [boolBought, setBoolBought] = useState(false);
    const [boolWant, setBoolWant] = useState(false);
    const [currentUser, setCurrentUser] = useState<User>()
    const [userData, setUserData] = useState<user>()
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
        const unsubscribe = AuthState((user) => {
            setCurrentUser(user);
        });
        return () => {
            unsubscribe;
        }
    }, [])

    useEffect(() => {
        if (currentUser) {
            getUserData(currentUser).then((data) => {
                if (data) {
                    let usr: user = {
                        id: data?.id,
                        name: data?.name,
                        wants: data?.wants,
                        bought: data?.bought,
                        answered: data?.answered,
                    };

                    setUserData(usr);
                    console.log(data);
                }
            });
        }
    }, [currentUser])

    useEffect(() => {
        if (product == undefined)
            navigate("/error");
    }, [product]);

    useEffect(() => {
        if (userData != undefined) {
            let data: user = userData;

            if (boolBought == true && (data.bought.includes(p.id) == false)) {
                data.bought.push(p.id);
            } else {

            }

            if (boolWant == true && (data.bought.includes(p.id) == false)) {
                data.wants.push(p.id);
            } else {

            }

            console.log(data);
            updataUser(data);
        }
    }, [boolBought, boolWant]);


    const handleBought = () => {
        if (boolBought == false) {
            setBoolBought(true);

        } else {
            setBoolBought(false);
        }
    }

    const handleWant = () => {
        if (boolWant == false) {
            setBoolWant(true);
        }
        else {
            setBoolWant(false);
        }
    }

    return (
        <>
            <Header />
            <section>
                <div className='p-10'>
                    <h2 className={styles.title}>商品情報</h2>
                </div>
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
                            <div className='m-3'>
                                <button onClick={handleWant} className={`center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white ${boolWant == true ? "bg-tea-400 text-white" : ""} `}>
                                    欲しい物リストに追加
                                </button>
                            </div>
                            <div className='m-3'>
                                <button onClick={handleBought} className={`center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white ${boolBought == true ? "bg-tea-400 text-white" : ""} `}>
                                    購入済みにする
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                boolBought == true ?
                    <Questionnaire product={product} user={userData} />
                    :
                    <></>
            }
        </>
    );
}

export default Product;