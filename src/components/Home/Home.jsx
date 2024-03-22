import SlickSlider from './Slider';
import Toggles from '../accessories/Toggles';
import Movies from './Banner02/Movies';
import ToggleData from '../Tools/ToggleData';

function Home() {
    const { toggle01, toggle02 } = ToggleData();
    console.log(toggle01)
    return (
        <div>
            <SlickSlider />
            <div className="container mx-auto">
                <Toggles type={'Trending'} data={toggle01} />
                <Movies defaultValue={toggle01} isSlider={true} />

                <Toggles type={'Latest'} data={toggle02} />
                <Movies defaultValue={toggle02} />
            </div>
        </div>
    );
}

export default Home;
