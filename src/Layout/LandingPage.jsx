import Search from "../components/accessories/Search";
import Toggle from "../components/accessories/Toggle";
import Slider from "react-slick";

function LandingPage() {
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



  return (
    <div className="">
      <Search />
      <Toggle data={ToggleData} type="Trending" />
      <div class="youtube-container">
        <iframe src="https://www.youtube.com/embed/_YUzQa_1RCE?autoplay=1&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=_YUzQa_1RCE" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="slider-container w-24">
        <Slider {...settings}>
          <div className="bg-green-400 max-w-20 h-20 text-center absolute m-3"><p>box 1</p></div>
          <div className="bg-green-400 max-w-20 h-20 text-center  m-3">box 2</div>
          <div className="bg-green-400 max-w-20 h-20 text-center  m-3">box 3</div>
          <div className="bg-green-400 max-w-20 h-20 text-center  m-3">box 4</div>

        </Slider>
      </div>



    </div>
  )
}

export default LandingPage;