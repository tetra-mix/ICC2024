import styles from './Ranking.module.scss'

export function Ranking() {
    return(
        <>
        <p className={styles.int}>1　　　　　　　　2　　　　　　　　3</p>
            <div className={styles.main}>
                <p>商品名</p>
                <p>香り</p>
                <p>味</p>
                <p>画像？</p>
            </div>
        </>
    )
}

export default Ranking