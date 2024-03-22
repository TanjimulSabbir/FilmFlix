import { useMemo } from 'react';
import SlickSlider from './Slider';
import Toggles from '../accessories/Toggles';
import moment from 'moment';
import Movies from './Banner02/Movies';

function Home() {
    const currentDate = useMemo(() => moment().format('YYYY-MM-DD'), []);
    const DaysLater = (days) => useMemo(() => moment().add(days, 'days').format('YYYY-MM-DD'), [days]);

    const toggle01 = [
        { title: 'In Theaters', path: 'with_release_type=2', type: "movie" },
        { title: 'Popular', path: 'popular', type: "movie" },
    ];

    const toggle02 = [
        { title: 'Today', path: `primary_release_date.gte=${currentDate}&primary_release_date.lte=${DaysLater(1)}`, type: "movie" },

        { title: 'This week', path: `primary_release_date.gte=${currentDate}&primary_release_date.lte=${DaysLater(6)}`, type: "movie" },
    ];

    return (
        <div>
            <SlickSlider />
            <div className="container mx-auto">
                <Toggles type={'Trending'} data={toggle01} />
                <Movies />
                <Toggles type={'Latest'} data={toggle02} />
            </div>
        </div>
    );
}

export default Home;
