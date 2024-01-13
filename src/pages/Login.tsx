function Login() {
    return (
        <>
            <section className="border flex p-3 justify-around items-center bg-tea-500">
                <h1 className="text-4xl font-bold text-white">
                  [TEA茶er]
                </h1>
            </section>
            <section>
                <h2>ログイン</h2>
                <h3>メールアドレス</h3>
                <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" />
                <h3>パスワード</h3>
                <input className="border-2 border-tea-100 rounded-md w-3/4" type="text" />
                <a href="/App"><button>続行</button></a>
            </section>
        </>
    )
}

export default Login