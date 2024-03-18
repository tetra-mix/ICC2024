import styles from "../scss/Questionnaire.module.scss"
import { useState, useEffect } from "react";
import { productI } from "../types/products";
import { user, answered } from "../types/user";
import { updataUser, updateProductByProduct_id } from "../firebase/evaluate";

function Questionnaire(props: { product: productI, user: user | undefined }) {
    const product = props.product;
    const user = props.user;

    const [small, setSmall] = useState(0);
    const [taste, setTaste] = useState(0);
    const [feel, setFeel] = useState(0);
    const [other, setOther] = useState("");
    const [boolConplete, setBoolConlete] = useState(false);

    useEffect(() => {
        if (taste && small && feel) {
            setBoolConlete(true);
        }
    }, [taste, small, feel, other]);

    const median = function (arr: number[]) {
        var half = (arr.length / 2) | 0;
        var temp = arr.sort();

        if (temp.length % 2) {
            return temp[half];
        }
        return (temp[half - 1] + temp[half]) / 2;
    };

    const submit = () => {
        //product の更新

        console.log(product, props.user)

        let ns: number[] = [small]
        ns = ns.concat(product.data.small)

        let nt: number[] = [taste]
        nt = nt.concat(product.data.taste)

        let nf: number[] = [feel]
        nf = nf.concat(product.data.feel)

        let nc: string[] = [other]
        nc = nc.concat(product.questionnaire.comment)


        const new_data = {
            small: median(ns),
            taste: median(nt),
            feel: median(nf),
            when: 0,
        };

        const new_product: productI = {
            id: product.id,
            title: product.title,
            kind: product.kind,
            price: product.price,
            description: product.description,
            questionnaire: {
                small: ns,
                taste: nt,
                feel: nf,
                health: product.questionnaire.health,
                comment: nc,
            },
            data: new_data,
            imageURL: product.imageURL,
        }

        updateProductByProduct_id(product.id, new_product);



        //user の更新
        let na = {
            id: product.id,
            questionnaire: {
                small: ns,
                taste: nt,
                feel: nf,
                health: product.questionnaire.health,
                comment: nc,
            },
        };

        let nas: answered[] = [na];
        if (user != undefined) {
            nas = nas.concat(user.answered);

            const new_usr: user = {
                id: user.id,
                name: user.name,
                answered: nas,
                wants: user.wants,
                bought: user.bought,
            }


            console.log(new_usr);
            updataUser(new_usr);

            alert("送信しました。");
        }


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
                        <button onClick={() => { setSmall(1); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${small == 1 ? "bg-tea-400 text-white" : ""} `}>1.</button>
                        <button onClick={() => { setSmall(2); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${small == 2 ? "bg-tea-400 text-white" : ""} `}>2.</button>
                        <button onClick={() => { setSmall(3); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${small == 3 ? "bg-tea-400 text-white" : ""} `}>3.</button>
                        <button onClick={() => { setSmall(4); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${small == 4 ? "bg-tea-400 text-white" : ""} `}>4.</button>
                        <button onClick={() => { setSmall(5); }} className={`bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 ${small == 5 ? "bg-tea-400 text-white" : ""} `}>5.</button>
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