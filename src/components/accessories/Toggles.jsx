import { useState } from "react";
import style from "../../style/Toggle.module.css"
import { useDispatch } from "react-redux";
import { addQueryKeywords } from "../../Redux/Features/movies/moviesSlice";

export default function Toggles({ data, type }) {
    const [slectToggle, setSelectToggle] = useState(data[0].title);
    const dispatch = useDispatch();

    const handleToggle = (item) => {
        setSelectToggle(item.title)
        dispatch(addQueryKeywords(item))
    }
    return (
        <div className="flex items-center space-x-5 mt-10 mb-6 text-base">
            <h1 className="text-lg lg:text-[22px] tracking-wider font-semibold">{type}</h1>
            <div className="flex items-center justify-between border border-gray-600 rounded-3xl">
                {data?.map(item => {
                    return (
                        <p key={item.title}
                            className={`cursor-pointer py-[3px] px-6 text-sm lg:text-base 
                            ${(slectToggle === item.title) ? style.Toggled : "text-white"}`}
                            onClick={() => handleToggle(item)}>
                            {item.title}</p>
                    )
                })}
            </div>
        </div>
    )
}
