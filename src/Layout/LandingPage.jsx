import { useGetMoviesQuery } from "../Redux/Features/Api/movieApi";
import Banner from "../components/Home/Banner";
import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";
import Slider from "react-slick";

function LandingPage() {
  const { data: movies, isLoading, isError, error } = useGetMoviesQuery("now_playing");

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
  if (!isLoading) {
    console.log(movies, error)
  }
  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=95735e862c8d7543ceee5364740d5db4");

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     console.log(data); // Log the data for debugging
  //     return data; // Return the data
  //   } catch (error) {
  //     console.error('Error fetching movies:', error);
  //     throw error; // Re-throw the error to be caught by the caller
  //   }
  // };

  // Call the function and handle the returned promise
  // fetchMovies()
  //   .then(data => {
  //     // Handle the movie data
  //     console.log('Movies:', data);
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error('Error fetching movies:', error);
  //   });

  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
    </div>
  )
}

export default LandingPage;