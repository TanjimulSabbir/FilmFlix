import { useState } from "react";
import style from "../style/Toggle.module.css"

export default function Toggle({ data, type }) {
    const [slectToggle, setSelectToggle] = useState(data[0].title);
    const handleToggle = (item) => {
        setSelectToggle(item.title)
    }
    return (
        <div className="flex items-center space-x-5 mt-10 mb-6 text-base">
            <h1 className="text-lg font-bold">{type}</h1>
            <div className="flex items-center justify-between border border-gray-600 rounded-3xl">
                {data?.map(item => (
                    <p key={item.title} className={`cursor-pointer py-[3px] px-6 text-base ${(slectToggle === item.title) ? style.Toggled:"text-black"}`} onClick={() => handleToggle(item)}>
                        {item.title}</p>
                ))}
            </div>
        </div>
    )
}
