import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Loading from "../../components/accessories/Loading";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Similar from "./Similar";
import Section05 from "./Section05";
import { useDispatch } from "react-redux";
import { addClickedMovieDetailsData } from "../../Redux/Features/movies/moviesSlice";
import { useEffect } from "react";
import { documentTitle } from "../../components/Tools/Others";

function MovDetailsHome() {
  const id = useParams().movieId
  const { data: movie = {}, isLoading, isError, error } = useGetMovieDetailsQuery(id, { refetchOnFocus: false, refetchOnMountOrArgChange: false, });

  const dispatch = useDispatch();

  let content;
  if (isLoading) {
    content = <Loading />
  }
  if (isError) {
    content = "Data fetching error"
  }



  if (!isLoading && !isError) {
    dispatch(addClickedMovieDetailsData(movie))
    content = <>
      <Section01 movie={movie} />
      <Section02 movie={movie} />
      <Section03 />
      <Section04 id={id} />
      <Section05 />
      <Similar />
    </>
  }

  useEffect(() => {
    documentTitle(movie.title) // Update the document title
  }, [id, movie]);

  return (
    <div className="container mx-auto">
      {content}
    </div>
  )
}

export default MovDetailsHome;