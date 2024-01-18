import styles from "./Questionnary.module.scss"

function Questionnary() {
    return(
        <>
        <section className="border flex p-3 justify-around items-center bg-tea-500">
            <h1 className="text-4xl font-bold text-white">
              [TEA茶er]
            </h1>
        </section>
        <section>
            <h2 className={styles.main}>アンケート</h2>
            <h3 className={styles.content}>商品名</h3>
            <h3 className={styles.content}>香り</h3>
            <p className={styles.center}>苦い　　　　　　　　　　　　　　　　旨い</p>
            <div className={styles.center}>
                <button className={styles.button}>1</button>
                <button className={styles.button}>2</button>  
                <button className={styles.button}>3</button>  
                <button className={styles.button}>4</button>  
                <button className={styles.button}>5</button> 
            </div>
            <h3 className={styles.content}>味</h3>
            <div className={styles.center}>
                <button className={styles.button}>苦い</button>
                <button className={styles.button}>少し苦い</button>  
                <button className={styles.button}>普通</button>  
                <button className={styles.button}>少し甘い</button>  
                <button className={styles.button}>甘い</button> 
            </div>
            <h3 className={styles.content}>飲むならいつか</h3>
            <div className={styles.center}>
                <button className={styles.button}>朝</button>
                <button className={styles.button}>昼</button>  
                <button className={styles.button}>夜</button>
            </div>
            <h3 className={styles.content}>どんな気分の時に飲みたいか</h3>
            <div className={styles.center}>
                <button className={styles.button}>嬉しい時</button>
                <button className={styles.button}>悲しい時</button>  
                <button className={styles.button}>楽しい時</button>
            </div>
            <div className={styles.center}>
                <a href="/"><button className={styles.button}>完了</button></a>
            </div>
        </section>
        </>
    )
}

export default Questionnary