import Header from "../components/Header";
import SearchfromName from './SearchfromName';
import SearchfromGenre from './SearchfromGenre';
import SearchfromFeel from './SearchfromFeel';
import SearchfromTaste from './SearchfromTaste';


export default function Base() {
  return (
    <>
      <Header />
      <section className="flex flex-row p-10 bg-tea-10">
        <div className="basis-2/3">
          <h1 className="text-black text-xl sm:text-3xl md:text-4xl">
            新たなお茶に出会える<br />
            レコメンドサービス<br />
          </h1>
          <p className="p-5 sm:p-10 text-2xl sm:text-5xl font-bold">「TEA茶er」</p>
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

    </>

  );
}