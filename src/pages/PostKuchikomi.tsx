import styles from "./PostKuchikomi.module.scss"

function PostKuchikomi() {
    return(
        <>
        <section className="border flex p-3 justify-around items-center bg-tea-500">
            <h1 className="text-4xl font-bold text-white">
              [TEA茶er]
            </h1>
        </section>
        <section>
            <h2 className={styles.main}>口コミを投稿</h2>
            <h3 className={styles.content}>商品名</h3>
            <div className={styles.center}>
                <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" /><br />
            </div>
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
            <h3 className={styles.content}>コメント</h3>
            <div className={styles.center}>
                <textarea className={styles.text} name="a"  cols={40} rows={5}></textarea>
            </div>
            <div className={styles.center}>
                <a href="/"><button className={styles.button}>投稿</button></a>
            </div>
        </section>
        </>
    )
}

export default PostKuchikomi