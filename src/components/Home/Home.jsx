import SlickSlider from './Slider';
import Toggles from '../accessories/Toggles';
import Movies from './Banner02/Movies';
import ToggleData from '../Tools/ToggleData';
import "../../style/animation.css"

function Home() {
    const { toggle01, toggle02, toggle03 } = ToggleData();
    console.log(toggle01)
    return (
        <div className='-mt-24'>
            <SlickSlider />
            <div className=" container mx-auto">
                <Toggles type={'Trending'} data={toggle01} />
                <Movies defaultValue={toggle01} isSlider={true} />

                <Toggles type={'Latest'} data={toggle02} />
                <Movies defaultValue={toggle02} isSlider={true} />

                <Toggles type={'Now playing in theaters'} data={toggle03} />
                <Movies defaultValue={toggle03} />
            </div>
        </div>
    );
}

export default Home;
