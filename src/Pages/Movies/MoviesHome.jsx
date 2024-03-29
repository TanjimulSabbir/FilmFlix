import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

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
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "R", "X R", "NC-17", "Untrated"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] }
  ];

  const InputTypes = ["Genres"]

  return (
    <div className="pt-24 container mx-auto">
      {genresData.map((item, index) => (
        <div key={item.keywordTitle} className="relative">
          <p onClick={() => toggleSection({ keywordTitle: item.keywordTitle, index })} className="flex items-center space-x-3 cursor-pointer mt-2">
            {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) ? <FaMinus className="bg-gray-700 p-1 rounded" /> : <FaPlus className="bg-gray-700 p-1 rounded" />}
            <span> {item.keywordTitle}</span>
          </p>


          {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) && <div className="my-5">
            {item.keywords.map(keyword => (
              <div key={keyword} className="mt-1 flex items-center space-x-3">
                <input type={InputTypes.includes(item.keywordTitle) ? "checkbox" : "radio"} id={keyword} name={item.keywordTitle} value={keyword} className={` appearance-none w-4 h-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent ${InputTypes.includes(item.keywordTitle) ? "rounded" : "rounded-full"}`} />
                <label className="cursor-pointer" id={keyword} htmlFor={keyword}>{keyword}</label>
              </div>
            ))}
          </div>}
        </div>
      ))}
    </div>
  );
}
