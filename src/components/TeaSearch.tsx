import TeaSearchfromName from './TeaSearchfromName';
import TeaSearchfromGenre from './TeaSearchfromGenre';
import TeaSearchfromFeel from './TeaSearchfromFeel';
import TeaSearchfromTaste from './TeaSearchfromTaste';


export default function TeaSearch() {
  return (
    <>
      {/*PC版の表示*/}
      <section className="flex flex-row">
        <div className="p-2 border basis-1/2 md:basis-full">
          <h3 className="text-md font-bold md:text-3xl">名前から検索</h3>
          <p className="text-sm">
            お茶の品種名を入力して検索することができます。
          </p>
          <TeaSearchfromName />
        </div>
        <div className='p-2 border basis-1/2 md:hidden'>
          <div className="">
            <h3 className="text-md font-bold">ジャンルから検索</h3>
            <p className="text-sm">
              製品の種類から検索することができます。
            </p>
            <TeaSearchfromGenre />
          </div>
        </div>
      </section>
      <section className="flex flex-row">
        <div className="hidden md:block md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">ジャンルから検索</h3>
          <p className="text-sm">
            製品の種類から検索することができます。
          </p>
          <TeaSearchfromGenre />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">気分・シーンから検索</h3>
          <p className="text-sm">
            気分やシーンに合わせてお茶を検索することができます。
          </p>
          <TeaSearchfromFeel />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">香りや味から検索</h3>
          <p className="text-sm">
            お茶の香りや味から検索することができます。
          </p>
          <TeaSearchfromTaste />
        </div>
      </section >
    </>

  );
}