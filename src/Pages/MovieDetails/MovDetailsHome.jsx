import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import { addClickedMovieDetailsData } from "../../Redux/Features/movies/moviesSlice";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Similar from "./Similar";
import Section05 from "./Section05";

import { documentTitle } from "../../components/Tools/Others";
import Recommendations from "./Recommendations";
import NotFoundError from "../../components/accessories/NotFoundError";
import WelComeText from "../../UI/WelcomeText";
import LoadingInline from "../../components/accessories/InlineLoading";

function MovDetailsHome() {
  const id = useParams().id
  const pathType = useLocation().pathname.split("/")[1];

  const { data: movie = {}, isLoading, isError, error } = useGetMovieDetailsQuery({ id, type: pathType });

  const dispatch = useDispatch();

  let content;
  if (isLoading) {
    content = <LoadingInline />
  }
  if (!isLoading && !isError && movie.id) {
    dispatch(addClickedMovieDetailsData(movie))
    content = <>
      <Section01 movie={movie} />
      <Section02 movie={movie} />
      <Section03 />
      <Similar />
      <Section04 id={id} type={pathType} />
      <Section05 />
      <Recommendations />
    </>
  }

  useEffect(() => {
    documentTitle(movie?.title) // Update the document title
  }, [id, movie]);

  if (isError || !movie?.id) {
    content = <NotFoundError message="Data" />
  }

  return (
    <div className="container w-full mx-auto h-full overflow-x-hidden">
      {content}
    </div>
  )
}

export default MovDetailsHome;