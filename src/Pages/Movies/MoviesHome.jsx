import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Movies from "./Movies";
import "../../style/sidebar.css";
import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi";
import { genresMovieData, getMovieNewKeyword } from "../../components/Tools/filteredKeywords";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Error from "../../components/accessories/Error";
import moment from "moment";
import toast from "react-hot-toast";
import LoadingInline from "../../components/accessories/InlineLoading";

export default function MoviesHome() {
  const [path, setPath] = useState("sort_by=now_playing");
  const { data: movies, isLoading, isError, refetch, isFetching } = useGetDiscoverMoviesQuery({ type: "movie", path });
  const [openSections, setOpenSections] = useState([]);
  const [genresKeywords, setGenresKeywords] = useState([]);
  const [content, setContent] = useState(null);

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
      if (genresKeywords.length >= 5) {
        toast.error("Maximum 5 keywords can be selected");
        return; // Exit the function early
      }
      setGenresKeywords(prev =>
        prev.includes(keyword.id) ? prev.filter(item => item !== keyword.id) : [...prev, keyword.id]
      )
    } else {
      switch (keywordTitle) {
        case 'Sort By':
          {
            const newKeyword = getMovieNewKeyword(keyword)
            setPath(`sort_by=${newKeyword}`)
          }
          break;
        case 'IMDb Rating':
          setPath(`vote_average.gte=${keyword.split(" ")[0]}`);
          break;
        case 'MPAA Rating':
          setPath(`certification=${keyword}`);
          break;
        case 'Metascore':
          setPath(`vote_average.gte=${keyword.split(" ")[0] * .1}`);
          break;
        case 'New Releases':
          {
            const today = moment();
            const searchedMonth = keyword.split(" ")[1];
            const startDate = moment(today).subtract(Number(searchedMonth), 'months').format('YYYY-MM-DD');
            const endDate = moment(today).format('YYYY-MM-DD');
            setPath(`primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`)
          }
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    genresKeywords.length > 0 ? setPath(`with_genres=${genresKeywords.join(',')}`) : setPath(`with_genres=18,80,9648,`)
  }, [genresKeywords])


  useEffect(() => {
    refetch();
  }, [path]);

  useEffect(() => {
    if (isFetching || isLoading) {
      setContent(<LoadingInline />);
    } if (!isLoading && !isError && movies && movies.results.length > 0) {
      const moviesContent = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} type="movie" />);
      setContent(moviesContent);
    } if (!isLoading && isError && (!movies || movies.results.length === 0)) {
      setContent(<Error message="No movies found!" />);
    }
  }, [isFetching, isLoading, isError, movies]);

  return (
    <div className="h-full w-full flex bg-black">
      <div className="relative w-[200px] sm:w-[250px]">
        <div className="sticky pt-14 pb-4 pl-3 sm:pl-5 min-h-full md:pl-10 w-[200px] sm:w-[250px] z-30 rounded">
          {genresMovieData.map((item, index) => (
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
