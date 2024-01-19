import styles from "../scss/Questionnaire.module.scss"
import { useState, useEffect } from "react";
import { productI } from "../types/products";

function Questionnaire(props: { product: productI }) {
    const product = props.product;
    const [smell, setSmell] = useState(0);
    const [taste, setTaste] = useState(0);
    const [feel, setFeel] = useState(0);
    const [other, setOther] = useState("");
    const [boolConplete, setBoolConlete] = useState(false);

    console.log(product);

    useEffect(() => {
        if (taste && smell && feel) {
            setBoolConlete(true);
        }
    }, [taste, smell, feel, other]);

    const submit = () => {
        
    }

    return (
        <>
            <section className="bg-tea-20 p-10">
                <div className="pb-10">
                    <h2 className={styles.title}>アンケート</h2>
                </div>
                <div className="pb-10">
                    <h3 className="text-2xl">・味はどうですか？</h3>
                    <div className="text-xl grid grid-cols-5 gap-4 md:w-1/2">
                        <span className="text-left col-span-2">さわやか</span>
                        <span className="text-center">味</span>
                        <span className="text-right col-span-2">濃厚</span>
                        <button onClick={() => { setTaste(1); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${taste == 1 ? "bg-tea-400 text-white" : ""} `}>1.</button>
                        <button onClick={() => { setTaste(2); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${taste == 2 ? "bg-tea-400 text-white" : ""} `}>2.</button>
                        <button onClick={() => { setTaste(3); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${taste == 3 ? "bg-tea-400 text-white" : ""} `}>3.</button>
                        <button onClick={() => { setTaste(4); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${taste == 4 ? "bg-tea-400 text-white" : ""} `}>4.</button>
                        <button onClick={() => { setTaste(5); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${taste == 5 ? "bg-tea-400 text-white" : ""} `}>5.</button>
                    </div>
                </div>
                <div className="pb-10">
                    <h3 className="text-2xl">・香りはどうですか？</h3>
                    <div className="text-xl grid grid-cols-5 gap-4 md:w-1/2">
                        <span className="text-left col-span-2">さわやか</span>
                        <span className="text-center">味</span>
                        <span className="text-right col-span-2">甘い</span>
                        <button onClick={() => { setSmell(1); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${smell == 1 ? "bg-tea-400 text-white" : ""} `}>1.</button>
                        <button onClick={() => { setSmell(2); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${smell == 2 ? "bg-tea-400 text-white" : ""} `}>2.</button>
                        <button onClick={() => { setSmell(3); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${smell == 3 ? "bg-tea-400 text-white" : ""} `}>3.</button>
                        <button onClick={() => { setSmell(4); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${smell == 4 ? "bg-tea-400 text-white" : ""} `}>4.</button>
                        <button onClick={() => { setSmell(5); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${smell == 5 ? "bg-tea-400 text-white" : ""} `}>5.</button>
                    </div>
                </div>
                <div className="pb-10">
                    <h3 className="text-2xl">・どんなときに飲みたいと思いましたか？最も当てはまるものを選んでください。</h3>
                    <div className="grid grid-cols-5 gap-5 md:w-1/2">
                        <div className="grid grid-rows-4 gap-4 text-xl w-12">
                            <button onClick={() => { setFeel(1); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${feel == 1 ? "bg-tea-400 text-white" : ""} `}>１.</button>
                            <button onClick={() => { setFeel(2); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${feel == 2 ? "bg-tea-400 text-white" : ""} `}>２.</button>
                            <button onClick={() => { setFeel(3); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${feel == 3 ? "bg-tea-400 text-white" : ""} `}>３.</button>
                            <button onClick={() => { setFeel(4); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${feel == 4 ? "bg-tea-400 text-white" : ""} `}>４.</button>
                        </div>
                        <div className="col-span-4 grid grid-rows-4 gap-4 text-xl w-full">
                            <p className="p-2">健康・美容</p>
                            <p className="p-2">リラックスしたい</p>
                            <p className="p-2">口をスッキリしたい・のどをうるおす</p>
                            <p className="p-2">贅沢な時間/団らんの時間</p>
                        </div>
                    </div>
                </div>
                <div className="pb-10">
                    <h3 className="text-2xl">コメントを記入してください。</h3>
                    <input onChange={(e) => { setOther(e.target.value); }} className="border-2 border-tea-100 rounded-md w-full md:w-1/2" type="text" />
                </div>
                <div className={styles.center}>
                    <button onClick={submit} className={`w-24 text-black border-0 rounded-md p-2 ml-2 ${boolConplete == true ? "bg-tea-400 text-white hover:bg-tea-300 hover:text-white " : "bg-gray-100 "} `}>送信</button>
                </div>
            </section>
        </>
    )
}

export default Questionnaire