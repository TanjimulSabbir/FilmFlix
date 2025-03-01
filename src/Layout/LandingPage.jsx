import { useGetMoviesQuery } from "../Redux/Features/Api/movieApi";
import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";

function LandingPage() {
  const { data: movies, isLoading } = useGetMoviesQuery("now_playing");

  const ToggleData = [
    { title: "Today", path: "" },
    { title: "This week", path: "" },
  ];

  if (isLoading) {
    return <p className="text-red-500 text-3xl">Loading...</p>;
  }

  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
    </div>
  );
}

export default LandingPage;
