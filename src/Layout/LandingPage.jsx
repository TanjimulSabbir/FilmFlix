import { useGetMoviesQuery } from "../Redux/Features/Api/movieApi";
import Banner from "../components/Home/Banner";
import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";


function LandingPage() {
  const { data: movies, isLoading, isError, error } = useGetMoviesQuery("now_playing");

  const ToggleData = [{ title: "Today", "path": "" }, { title: "This week", path: "" }]
 
  if (isLoading) {
    return <p className="text-red-500 text-3xl">Loading...</p>
  }
  if (!isLoading) {
    console.log(movies.results, error)
  }
 
  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
    </div>
  )
}

export default LandingPage;