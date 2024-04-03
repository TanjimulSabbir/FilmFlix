import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Movies from "./Movies";

export default function MoviesHome() {
  const genres = useSelector(state => state.movieData.genresData.map(genre => genre.name));
  const [openSections, setOpenSections] = useState([]);
  const [btnOpen, setBtnOpen] = useState([]);

  const toggleSection = ({ keywordTitle, index }) => {
    setOpenSections(prevItems => {
      const findItemIndex = prevItems.findIndex(item => item.keywordTitle === keywordTitle);
      if (findItemIndex !== -1) {
        // If the section is already in the openSections array, toggle its index value
        const updatedItems = [...prevItems];
        updatedItems[findItemIndex] = { keywordTitle, index: !prevItems[findItemIndex].index };
        return updatedItems;
      } else {
        // If the section is not in the openSections array, add it with index true
        return [...prevItems, { keywordTitle, index: true }];
      }
    });
  };

  const genresData = [
    { "keywordTitle": "Sort By", "keywords": ["Popular", "New Releases", "Recently Added", "IMDb Rating"] },
    { "keywordTitle": "Genres", "keywords": genres },
    { "keywordTitle": "New Releases", "keywords": ["Last 3 Months", "Last 6 Months", "Last 12 Months"] },
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "R", "X-R", "NC-17", "Untrated"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] },
    { "keywordTitle": "Metascore", "keywords": ["90 or Higher", "80 or Higher", "70 or Higher", "60 or Higher", "50 or Higher"] }
  ];

  const InputTypes = ["Genres"]

  return (
    <div className="pt-20 w-full h-screen flex">
      <div className="relative w-[200px] sm:w-[250px]">
        <div className="fixed pt-14 pl-3 sm:pl-5 md:pl-7 h-full overflow-hidden w-[200px] sm:w-[250px]  bg-[#0b0b0b] z-50 shadow-lg">
          {genresData.map((item, index) => (
            <div key={item.keywordTitle} className="relative">
              <p onClick={() => toggleSection({ keywordTitle: item.keywordTitle, index })} className="flex items-center space-x-5 cursor-pointer mt-5 uppercase text-gray-400 font-bold">
                {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) ? <FaMinus className="bg-gray-400 p-1 rounded font-bold text-black" /> : <FaPlus className="bg-gray-400 p-1 rounded font-bold text-black" />}
                <span> {item.keywordTitle}</span>
              </p>


              {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) && <div className="my-3">
                {item.keywords.map(keyword => (
                  <div key={keyword} className="mt-1 flex items-center space-x-5">
                    <input type={InputTypes.includes(item.keywordTitle) ? "checkbox" : "radio"} id={keyword} name={item.keywordTitle} value={keyword} className={`cursor-pointer appearance-none w-4 h-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent ${InputTypes.includes(item.keywordTitle) ? "rounded" : "rounded-full"}`} />
                    <label className="cursor-pointer" id={keyword} htmlFor={keyword}>{keyword}</label>
                  </div>
                ))}
              </div>}
            </div>
          ))}
        </div>
      </div>
      <Movies />
    </div>
  );
}
