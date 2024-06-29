import { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import "../../../style/animation.css"

import { debounce } from "../../accessories/Debounce";
import SearchedSuggestions from "./SearchedSuggestions";


export default function SearchModal({ handleSearchBtn, openSearchModal }) {
    const [inputText, setInputText] = useState("dune");
    const [text, setText] = useState("")

    const handleInput = (event) => {
        const data = event.target.value;
        debnce(data)
        setText(data)
    }

    const handleSearch = (debouncedText) => {
        setInputText(debouncedText)
    }

    const debnce = debounce(handleSearch, 500);

    useEffect(() => {
        if (openSearchModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openSearchModal]);
    const removeInput = () => {
        setText("");
        setInputText("")
    }
    return (
        openSearchModal && <div className="searchModalAnimation fixed w-full h-screen inset-0 bg-[#00000080] z-50 backdrop-blur-sm">
            <div className="md:px-4 mt-5 md:w-1/3 mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow topSlider" placeholder="Search" onChange={(event) => handleInput(event)} value={text} />

                    {inputText ? <RxCross1 className="cursor-pointer text-red-600" onClick={() => removeInput()} /> : <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>}
                </label>
                <SearchedSuggestions inputText={inputText} handleSearchBtn={handleSearchBtn} />
            </div>
            <button className="absolute -top-3 lg:top-7 left-3 md:right-3" onClick={handleSearchBtn}>
                <IoMdClose className="w-7 h-7 text-red-600 cursor-pointer" />
            </button>
        </div>
    )
}
