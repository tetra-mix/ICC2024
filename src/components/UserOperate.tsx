import styles from '../scss/app.module.scss'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productI } from '../types/products';
import { updataUser } from '../firebase/evaluate';

function UserOperate(props: { product: productI }) {

    console.log(props.product);

    return (
        <section className="bg-tea-10 p-10">
            <div className="pb-10">
                <h2 className={styles.title}>登録</h2>
            </div>
            <div>
                <div className=''>
                    <button className="center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white">
                        お気に入りに追加
                    </button>
                </div>
                <div className='center'>
                    <Link to="/" className="center text-black border-0 rounded-md p-2 ml-2 bg-tea-100 text-white hover:bg-tea-300 hover:text-white">
                        トップページに戻る
                    </Link>
                </div>

            </div>
        </section>

    );
}

export default UserOperate;