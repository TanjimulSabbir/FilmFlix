import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Movies from "./Movies";
import "../../style/sidebar.css";
import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi";
import { genresData } from "../../components/Tools/filteredKeywords";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Error from "../../components/accessories/Error";
import moment from "moment";

export default function MoviesHome() {
  const [path, setPath] = useState("with_genres=28,12");
  const { data: movies, isLoading, isError, refetch } = useGetDiscoverMoviesQuery({ type: "movie", path });
  const [openSections, setOpenSections] = useState([]);
  const [genresKeywords, setGenresKeywords] = useState([]);


  const toggleSection = ({ keywordTitle, index }) => {
    setOpenSections(prevItems => {
      const findItemIndex = prevItems.findIndex(item => item.keywordTitle === keywordTitle);
      if (findItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[findItemIndex] = { keywordTitle, index: !prevItems[findItemIndex].index };
        return updatedItems;
      } else {
        return [...prevItems, { keywordTitle, index: true }];
      }
    });
  };

  const InputTypes = ["Genres"];

  const handleClick = (keywordTitle, keyword) => {
    if (keywordTitle === "Genres") {
      setGenresKeywords(prev => [...prev, keyword.id]);
      setPath(`with_genres=${genresKeywords.join(',')}`)
    } else {
      switch (keywordTitle) {
        case 'IMDb Rating':
          setPath(`vote_average.gte=${keyword}`);
          break;
        case 'MPAA Rating':
          setPath(`certification=${keyword}`);
          break;
        case 'Metascore':
          setPath(`vote_average.gte=${keyword}`);
          break;
        case 'New Releases':
          {
            const today = moment();
            const searchedMonth = keyword.split(" ")[1];
            const startDate = moment(today).subtract(Number(searchedMonth), 'months').format('YYYY-MM-DD');
            const endDate = moment(today).format('YYYY-MM-DD');
            setPath(`&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`)
          }
          break;

        default:
          break;
      }
    }
  }

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && movies?.results.length > 0) {
    content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} />);
  }

  useEffect(() => {
    refetch()
  }, [genresKeywords, path]);

  return (
    <div className="h-full w-full flex bg-black">
      <div className="relative w-[200px] sm:w-[250px]">
        <div className="sticky pt-14 pb-4 pl-3 sm:pl-5 min-h-full md:pl-10 w-[200px] sm:w-[250px] z-30 rounded">
          {genresData.map((item, index) => (
            <div key={item.keywordTitle} className="relative">

              {/* Keyword title */}
              <p
                onClick={() => toggleSection({ keywordTitle: item.keywordTitle, index })}
                className="flex items-center space-x-3 cursor-pointer mt-5 text-white font-bold">
                {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) ? <FaMinus className="bg-gray-100 p-1 rounded text-black" /> : <FaPlus className="bg-gray-100 p-1 rounded text-black" />}
                <span> {item.keywordTitle}</span>
              </p>

              {/* keyword  */}
              {openSections.find(section => section.keywordTitle === item.keywordTitle && section.index) && (
                <div className="my-3 text-white">
                  {item.keywords.map(keyword => (
                    <div key={item.keywordTitle === "Genres" ? keyword.id : keyword} className={`mt-2 flex items-center space-x-3 font-thin text-sm ${InputTypes.includes(item.keywordTitle) ? "custom-checkbox" : "custom-radio"}`}>
                      <input
                        type={InputTypes.includes(item.keywordTitle) ? "checkbox" : "radio"}
                        id={item.keywordTitle === "Genres" ? keyword.id : keyword}
                        name={item.keywordTitle}
                        onChange={() => handleClick(item.keywordTitle, keyword)}
                      />
                      <label
                        className="cursor-pointer"
                        id={item.keywordTitle === "Genres" ? keyword.id : keyword}
                        htmlFor={item.keywordTitle === "Genres" ? keyword.id : keyword}
                      >
                        {item.keywordTitle === "Genres" ? keyword.name : keyword}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Movies content={content} />
    </div>
  );
}
