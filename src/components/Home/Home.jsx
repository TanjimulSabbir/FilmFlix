import { useEffect, useRef } from "react";
import SlickSlider from "./Slider";

import Toggles from "../accessories/Toggles";
import Movies from "./Banner02/Movies";
import ToggleData from "../Tools/ToggleData";
import "../../style/animation.css";

function Home() {
  const { toggle01, toggle02, toggle03 } = ToggleData();
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <div ref={sliderRef}>
        <SlickSlider />
      </div>
      <div className="container mx-auto">
        <Toggles type="Trending" data={toggle01} />
        <Movies defaultValue="popular" isSlider={true} />

        <Toggles type="Latest" data={toggle02} />
        <Movies
          defaultValue={toggle02[0].path}
          isSlider={true}
          path={toggle02[0].path}
        />

        <Toggles type="Now playing in theaters" data={toggle03} />
        <Movies defaultValue="upcoming" />
      </div>
    </div>
  );
}

export default Home;
