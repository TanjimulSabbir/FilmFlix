import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function MoviesHome() {
  const genres = useSelector(state => state.movieData.genresData.map(genre => genre.name));
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = ({ keywordTitle, index }) => {
    setOpenSections(prevItems => {
      const findItem = prevItems.findIndex(item => item.keywordTitle === keywordTitle);
      if (findItem != -1) {
        return prevItems[findItem] = { keywordTitle, index: !index }
      } else {
        return prevItems[findItem] = { keywordTitle, index }
      }
    });
  };

  // //     if (prevItems.includes(keywordTitle)) {
  //   return { ...prevItems, index: false }
  // } else {
  //   return { ...prevItems, index: index }
  // }

  const genresData = [
    { "keywordTitle": "Sort By", "keywords": ["Popular", "New Releases", "Recently Added", "IMDb Rating"] },
    { "keywordTitle": "Genres", "keywords": genres },
    { "keywordTitle": "New Releases", "keywords": ["Last 3 Months", "Last 6 Months", "Last 12 Months"] },
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "R", "X R", "NC-17", "Untrated"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] }
  ];

  return (
    <div className="pt-24 container mx-auto">
      {genresData.map((item, index) => (
        <div key={item.keywordTitle} className="relative">
          <button onClick={() => toggleSection({ keywordTitle: item.keywordTitle, index })} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-20">
            {item.keywordTitle}
          </button>
          {openSections.keywordTitle === item.keywordTitle && openSections === index && (
            <div className="transition-all flex flex-col space-y-1 ease-in-out duration-500 absolute w-full left-0 mt-2">
              {item.keywords.map(keyword => (
                <p key={keyword} className="p-4">
                  {keyword}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
