import styles from './ShowKuchikomi.module.scss'

export function ShowKuchikomi() {
    return(
        <>
            <div className={styles.main}>
                <p>ユーザー名</p>
                <p>商品名</p>
                <p>感想</p>
            </div>
        </>
    )
}

export default ShowKuchikomi