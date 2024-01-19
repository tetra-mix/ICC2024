import styles from '../scss/app.module.scss'
import { ProductTag } from "../components/Product_tag";
import Header from "../components/Header";
import SearchfromName from '../components/SearchfromName';
import SearchfromGenre from '../components/SearchfromGenre';
import SearchfromFeel from '../components/SearchfromFeel';
import SearchfromTaste from '../components/SearchfromTaste';

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-row p-10 bg-tea-10">
        <div className="basis-2/3">
          <h1 className="text-black text-xl sm:text-3xl md:text-4xl">
            新たなお茶に出会える<br />
            レコメンドサービス<br />
          </h1>
          <p className="p-5 sm:p-10 text-3xl sm:text-5xl font-bold">「TEA茶er」</p>
        </div>
        <div className="basis-1/3">
          <img className="w-48" src="/icon.png"></img>
        </div>
      </section>

      {/*PC版の表示*/}
      <section className="flex flex-row">
        <div className="p-8 border basis-1/2 md:basis-full">
          <h3 className="text-2xl md:text-3xl">名前から検索</h3>
          <p>
            お茶の品種名を入力して検索することができます。
          </p>
          <SearchfromName />
        </div>
        <div className='p-8 border basis-1/2 md:hidden'>
          <div className="">
            <h3 className="text-2xl">ジャンルから検索</h3>
            <p>
              製品の種類から検索することができます。
            </p>
            <SearchfromGenre />
          </div>
        </div>
      </section>
      <section className="flex flex-row">
        <div className="hidden md:block md:basis-1/3 p-8 border">
          <h3 className="text-2xl">ジャンルから検索</h3>
          <p>
            製品の種類から検索することができます。
          </p>
          <SearchfromGenre />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-8 border">
          <h3 className="text-2xl">気分・シーンから検索</h3>
          <p>
            気分やシーンに合わせてお茶を検索することができます。
          </p>
          <SearchfromFeel />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-8 border">
          <h3 className="text-2xl">香りや味から検索</h3>
          <p className="p-2">
            お茶の香りや味から検索することができます。
          </p>
          <SearchfromTaste />
        </div>
      </section >

      {/*スマホ版の表示*/}



      <section className='m-10'>
        <h3 className={styles.title}>商品一覧</h3>
        <p className='p-5 font-bold'>クリック/タップで詳細ページに移動します。</p>
        {
          <ProductTag />
        }
      </section>
      { /*
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>口コミ</h3>
      </section>
      <ShowKuchikomi />
      <section className="flex flex-row p-3">
        <h3 className={styles.title}>ランキング</h3>
      </section>
      <Ranking />
      */
      }
    </>
  )
}

export default App
