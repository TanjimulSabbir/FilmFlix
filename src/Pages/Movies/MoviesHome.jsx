import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Movies from "./Movies";
import "../../style/sidebar.css";

export default function MoviesHome() {
  const genres = useSelector(state => state.movieData.genresData.map(genre => genre.name));
  const [openSections, setOpenSections] = useState([]);
  const [filterdKeywords, setFilteredKeywords] = useState({})

  const toggleSection = ({ keywordTitle, index }) => {
    setOpenSections(prevItems => {
      const findItemIndex = prevItems.findIndex(item => item.keywordTitle === keywordTitle);
      if (findItemIndex !== -1) {
        // If the section is already in the openSections array, toggle its index value
        const updatedItems = [...prevItems];
        updatedItems[findItemIndex] = { keywordTitle, index: !prevItems[findItemIndex].index };
        // console.log(updatedItems,index, "updateItems")
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

  const handleClick = (keywordTitle, keyword, item, KeyType) => {
    setFilteredKeywords(prev => {
      const updatedKeywords = { ...prev };

      if (keywordTitle === 'Genres') {
        updatedKeywords[keywordTitle] = updatedKeywords[keywordTitle] ?
          updatedKeywords[keywordTitle].includes(keyword) ?
            updatedKeywords[keywordTitle].filter(item => item !== keyword) :
            [...updatedKeywords[keywordTitle], keyword]
          : [keyword];
      } else {
        updatedKeywords[keywordTitle] = keyword;
      }

      return updatedKeywords;
    });
  }


  console.log(filterdKeywords)
  return (
    <div className="h-full w-full flex bg-black">
      <div className="relative w-[200px] sm:w-[250px]">
        <div className="sticky pt-14 pb-4 pl-3 sm:pl-5 min-h-full md:pl-10 w-[200px] sm:w-[250px] z-30 rounded">
          {genresData.map((item, index) => (
            <div key={item.keywordTitle} className="relative">
              <p
                onClick={() => toggleSection({ keywordTitle: item.keywordTitle, index })}

                className="flex items-center space-x-3 cursor-pointer mt-5 text-white font-bold">

                {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) ? <FaMinus className="bg-gray-100 p-1 rounded text-black" /> : <FaPlus className="bg-gray-100 p-1 rounded text-black" />}

                <span> {item.keywordTitle}</span>
              </p>


              {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) && <div className="my-3 text-white">
                {item.keywords.map(keyword => (
                  <div key={keyword} className={`mt-2 flex items-center space-x-3 font-thin text-sm ${InputTypes.includes(item.keywordTitle) ? "custom-checkbox" : "custom-radio"}`}>
                    <input type={InputTypes.includes(item.keywordTitle) ? "checkbox" : "radio"}
                      id={keyword} name={item.keywordTitle} value={keyword} onChange={() => handleClick(item.keywordTitle, keyword, item, InputTypes)} />
                    <label className="cursor-pointer" id={keyword} htmlFor={keyword}>{keyword}</label>
                  </div>
                ))}
              </div>}
            </div>
          ))}
          {/* Filter button */}
          <div className="mt-7">
            <button className="btn" type="button">Search</button>
          </div>
        </div>
      </div>
      <Movies />
    </div>
  );
}
