function Kuchikomi() {
    return(
        <>
        <section className="border flex p-3 justify-around items-center bg-tea-500">
            <h1 className="text-4xl font-bold text-white">
              [TEA茶er]
            </h1>
        </section>
        <section>
            <h2>口コミを投稿</h2>
            <h3>商品名</h3>
            <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" />
            <h3>香り</h3>
            <h3>味</h3>
            <h3>コメント</h3>
            <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" />
            <button>投稿</button>
        </section>
        </>
    )
}

