import { useState } from "react";
import { useSelector } from "react-redux";

export default function MoviesHome() {
  const genres = useSelector(state => state.movieData.genresData.map(genre => genre.name));
  const [openSections, setOpenSections] = useState(Array(genres.length).fill(false));

  const toggleSection = (index) => {
    const updatedSections = [...openSections];
    updatedSections[index] = !updatedSections[index];
    setOpenSections(updatedSections);
  };

  const genresData = [
    { "keywordTitle": "Sort By", keywords: ["Popular", "New Releases", "Recently Added", "IMDb Rating"] },
    { "keywordTitle": "Genres", "keywords": genres },
    { "keywordTitle": "New Releases", "keywords": ["Last 3 Months", "Last 6 Months", "Last 12 Months"] },
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "R", "X R", "NC-17", "Untrated"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] }
  ];

  return (
    <div className="pt-24 container mx-auto">
      {genresData.map((item, index) => (
        <div key={item.keywordTitle}>
          <button onClick={() => toggleSection(index)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {item.keywordTitle}
          </button>
          <div className={`transition-all flex flex-col space-y-2 ease-in-out duration-500 ${openSections[index] ? 'py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
            {item.keywords.map(keyword => (
              <p key={keyword} className="p-4">
                {keyword}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
