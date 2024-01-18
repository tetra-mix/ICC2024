import { useState } from "react";

export default function SearchfromFeel() {
    const [String, setString] = useState("");

    const handleClick = () => {
        console.log(String);
    }

    return (
        <div className='grid grid-cols-4 sm:gap-4 '>
            <div className="col-span-3">
                <div className="relative inline-block text-left w-full">
                    <input onChange={(e) => {setString(e.target.value)}} className="border-2 border-tea-100 rounded-md w-full p-2" type="text" />
                </div>
            </div>
            <div className="w-full">
                <button className="bg-tea-100 w-12 md:w-full text-black border-0 rounded-md hover:bg-tea-300 hover:text-white p-2 ml-2">検索</button>
            </div>
        </div>

    )
}