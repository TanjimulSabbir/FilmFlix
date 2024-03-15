import { useGetMoviesQuery } from "../Redux/Features/Api/movieApi";
import Banner from "../components/Home/Banner";
import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";
import Slider from "react-slick";

function LandingPage() {
  const { data, isLoading, isError, error } = useGetMoviesQuery("now_playing");

  const ToggleData = [{ title: "Today", "path": "" }, { title: "This week", path: "" }]
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  if (isLoading) {
    return <p className="text-red-500 text-3xl">Loading...</p>
  }
  console.log(data)
  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
      {/* <div class="youtube-container">
        <iframe src="https://www.youtube.com/embed/_YUzQa_1RCE?autoplay=1&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=_YUzQa_1RCE" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}


      <h2 className="date">On January 2024</h2>
      {/* <Banner /> */}

    </div>
  )
}

export default LandingPage;