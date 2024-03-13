import { useState } from "react";
import style from "../components/style/Toggle.module.css"

export default function Toggle({ data, type }) {
    const [slectToggle, setSelectToggle] = useState(data[0].title);
    const handleToggle = (item) => {
        setSelectToggle(item.title)
    }
    return (
        <div className="flex items-center space-x-5 mt-10 mb-6 text-black">
            <h1 className="text-lg font-bold">{type}</h1>
            <div className="flex items-center justify-between border border-black rounded-3xl">
                {data?.map(item => (
                    <p key={item.title} className={`cursor-pointer py-[3px] px-4 ${(slectToggle === item.title) ? style.Toggled:"text-black"}`} onClick={() => handleToggle(item)}>
                        {item.title}</p>
                ))}
            </div>
        </div>
    )
}
