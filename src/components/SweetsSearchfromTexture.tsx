import { useState } from "react";

export default function SweetsSearchfromTexture() {

  const [boolTextureBox, setBoolTextureBox] = useState(false);
  const [TextureBox, setTextureBox] = useState("選択");

  const handleClick = () => {
    setBoolTextureBox(!boolTextureBox)
  }

  const setTexture = (Texture: string) => {
    setTextureBox(Texture);
    setBoolTextureBox(false);
  }

  return (

    <div className='grid grid-cols-4 sm:gap-4 text-sm'>
      <div className="col-span-3 relative inline-block text-left w-full">
        <button onClick={handleClick} type="button" className="inline-flex w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {TextureBox}
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        {
          boolTextureBox &&
          <div className='absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <span onClick={() => { setTexture("しっとり"); }} className='text-gray-700 block px-4 py-2 text-sm'>しっとり</span>
            <span onClick={() => { setTexture("さっぱり"); }} className='text-gray-700 block px-4 py-2 text-sm'>さっぱり</span>
            <span onClick={() => { setTexture("もちもち"); }} className='text-gray-700 block px-4 py-2 text-sm'>もちもち</span>
            <span onClick={() => { setTexture("濃厚"); }} className='text-gray-700 block px-4 py-2 text-sm'>濃厚</span>
          </div>
        }
      </div>
      <div>
        <button className="bg-tea-100 text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2 w-12">検索</button>
      </div>
    </div>


  )
}