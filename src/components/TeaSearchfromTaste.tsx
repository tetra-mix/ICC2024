import { useState } from "react";

type nn = {
  smell: number,
  taste: number
}


export default function TeaSearchfromTaste() {

  const [boolBox, setBoolBox] = useState(false);
  const [box, setBox] = useState<nn>({ smell: 0, taste: 0 });

  const handleClick = () => {
    setBoolBox(!boolBox)
  }

  const setTaste = (smell: number, taste: number) => {
    setBox({ smell: smell, taste: taste });
    setBoolBox(false);
  }

  return (
    <div className='grid grid-cols-4 sm:gap-4 text-sm'>
      <div className="col-span-3">
        <div className="relative inline-block text-left w-full">
          <button onClick={handleClick} type="button" className="w-full inline-flex gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {
              (box.smell && box.taste) ?
                <>
                  <p>香り:{box.smell}, 味{box.taste}</p>
                </>
                :
                <>
                  <p>選択</p>
                </>
            }
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          {
            boolBox &&
            <table className="absolute text-sm w-full rounded-md bg-white shadow-lg mt-2 table-fixed">
              <tr>
                <td></td>
                <td colSpan={2} className="text-xs">さわやか</td>
                <td>味</td>
                <td colSpan={2} className="text-xs">　濃厚　</td>
              </tr>
              <tr>
                <td rowSpan={2} className="text-xs">さわやか</td>
                <td onClick={() => setTaste(1, 1)}>O</td>
                <td onClick={() => setTaste(1, 2)}>O</td>
                <td onClick={() => setTaste(1, 3)}>O</td>
                <td onClick={() => setTaste(1, 4)}>O</td>
                <td onClick={() => setTaste(1, 5)}>O</td>
              </tr>
              <tr>
                <td onClick={() => setTaste(2, 1)}>O</td>
                <td onClick={() => setTaste(2, 2)}>O</td>
                <td onClick={() => setTaste(2, 3)}>O</td>
                <td onClick={() => setTaste(2, 4)}>O</td>
                <td onClick={() => setTaste(2, 5)}>O</td>
              </tr>
              <tr>
                <td>香り</td>
                <td onClick={() => setTaste(3, 1)}>O</td>
                <td onClick={() => setTaste(3, 2)}>O</td>
                <td onClick={() => setTaste(3, 3)}>O</td>
                <td onClick={() => setTaste(3, 4)}>O</td>
                <td onClick={() => setTaste(3, 5)}>O</td>
              </tr>
              <tr>
                <td rowSpan={2}>甘い</td>
                <td onClick={() => setTaste(4, 1)}>O</td>
                <td onClick={() => setTaste(4, 2)}>O</td>
                <td onClick={() => setTaste(4, 3)}>O</td>
                <td onClick={() => setTaste(4, 4)}>O</td>
                <td onClick={() => setTaste(4, 5)}>O</td>
              </tr>
              <tr>
                <td onClick={() => setTaste(5, 1)}>O</td>
                <td onClick={() => setTaste(5, 2)}>O</td>
                <td onClick={() => setTaste(5, 3)}>O</td>
                <td onClick={() => setTaste(5, 4)}>O</td>
                <td onClick={() => setTaste(5, 5)}>O</td>
              </tr>
            </table>
          }
        </div>
      </div>
      <div className="">
        <button className="bg-tea-100 w-12 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2">検索</button>
      </div>
    </div>
  )

}