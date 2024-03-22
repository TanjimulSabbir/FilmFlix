import { useMemo } from 'react';
import SlickSlider from './Slider';
import Toggles from '../accessories/Toggles';
import moment from 'moment';

function Home() {
    const currentDate = useMemo(() => moment().format('YYYY-MM-DD'), []);
    const DaysLater = (days) => useMemo(() => moment().add(days, 'days').format('YYYY-MM-DD'), [days]);

    const toggle01 = [
        { title: 'In Theaters', path: 'with_release_type=2' },
        { title: 'Popular', path: '/popular' },
    ];

    const toggle02 = [
        { title: 'Today', path: 'false', startDate: currentDate, lastDate: DaysLater(1) },
        { title: 'This week', path: 'false', startDate: currentDate, lastDate: DaysLater(6) },
    ];

    return (
        <div>
            <SlickSlider />
            <div className="container mx-auto">
                <Toggles type={'Trending'} data={toggle01} />
                <Toggles type={'Latest'} data={toggle02} />
            </div>
        </div>
    );
}

export default Home;
