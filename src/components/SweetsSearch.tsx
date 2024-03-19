import SweetsSearchfromName from './SweetsSearchfromName';
import SweetsSearchfromGenre from './SweetsSearchfromGenre';
import SweetsSearchfromFeel from './SweetsSearchfromFeel';
import SweetsSearchfromTaste from './SweetsSearchfromTaste';


export default function SweetsSearch() {
  return (
    <>
      {/*PC版の表示*/}
      <section className="flex flex-row">
        <div className="p-2 border basis-1/2 md:basis-full">
          <h3 className="text-md font-bold md:text-3xl">名前から検索</h3>
          <p className="text-sm">
            お茶の品種名を入力して検索することができます。
          </p>
          <SweetsSearchfromName />
        </div>
        <div className='p-2 border basis-1/2 md:hidden'>
          <div className="">
            <h3 className="text-md font-bold">ジャンルから検索</h3>
            <p className="text-sm">
              製品の種類から検索することができます。
            </p>
            <SweetsSearchfromGenre />
          </div>
        </div>
      </section>
      <section className="flex flex-row">
        <div className="hidden md:block md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">ジャンルから検索</h3>
          <p className="text-sm">
            製品の種類から検索することができます。
          </p>
          <SweetsSearchfromGenre />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">気分・シーンから検索</h3>
          <p className="text-sm">
            気分やシーンに合わせてお茶を検索することができます。
          </p>
          <SweetsSearchfromFeel />
        </div>
        <div className="basis-1/2 md:basis-1/3 p-2 border">
          <h3 className="text-md font-bold">香りや味から検索</h3>
          <p className="text-sm">
            お茶の香りや味から検索することができます。
          </p>
          <SweetsSearchfromTaste />
        </div>
      </section >
      {/*スマホ版の表示*/}

    </>

  );
}