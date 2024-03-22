import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Loading from "../../components/accessories/Loading";

function MovDetailsHome() {
  const id = useParams().movieId
  const { data: movie = {}, isLoading, isError, error } = useGetMovieDetailsQuery(id, { refetchOnFocus: false, refetchOnMountOrArgChange: false, });

  let content;
  if (isLoading) {
    content = <Loading />
  }
  if (isError) {
    content = "Data fetching error"
  }
  if (!isLoading && !isError) {
    content = <>
      <Section01 movie={movie} />
      <Section02 movie={movie} />
    </>
  }
  return (
    <div>
      {content}
    </div>
  )
}

export default MovDetailsHome;