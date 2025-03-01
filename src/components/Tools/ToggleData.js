import moment from "moment";
import { useMemo } from "react";

const ToggleData = () => {
    const currentDate = useMemo(() => moment().format('YYYY-MM-DD'), []);

    // Correctly define DaysLater as a function
    const DaysLater = (days) => moment().add(days, 'days').format('YYYY-MM-DD');

    const today = DaysLater(1);
    const thisWeek = DaysLater(6);

    const toggle01 = [
        { title: 'In Theaters', type: "movie", keyword: "top_rated" },
        { title: 'Popular', type: "movie", keyword: "popular" },
    ];

    const toggle02 = [
        { title: 'Today', path: `release_date.gte=${currentDate}&release_date.lte=${today}`, type: "movie" },
        { title: 'This week', path: `release_date.gte=${currentDate}&release_date.lte=${thisWeek}`, type: "movie" },
    ];


    const toggle03 = [
        { title: 'Upcoming', type: "movie", keyword: "upcoming" },
        { title: 'Now Playing', type: "movie", keyword: "now_playing" },
    ];

    return { toggle01, toggle02, toggle03 };
};

export default ToggleData;
