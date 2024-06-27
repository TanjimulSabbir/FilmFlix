import SlickSlider from './Slider';
import Toggles from '../accessories/Toggles';
import Movies from './Banner02/Movies';
import ToggleData from '../Tools/ToggleData';
import "../../style/animation.css"
import { useEffect, useRef } from 'react';

function Home() {
    const { toggle01, toggle02, toggle03 } = ToggleData();
    const sliderRef = useRef(null);
    useEffect(() => {
        sliderRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (
        <div>
            <div ref={sliderRef}>
                <SlickSlider />
            </div>
            <div className="container mx-auto">
                <Toggles type={'Trending'} data={toggle01} />
                <Movies defaultValue="popular" isSlider={true} />

                <Toggles type={'Latest'} data={toggle02} />
                <Movies defaultValue="top_rated" isSlider={true} path={true} />

                <Toggles type={'Now playing in theaters'} data={toggle03} />
                <Movies defaultValue="upcoming" />
            </div>
        </div>
    );
}

export default Home;
