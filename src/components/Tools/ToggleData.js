import moment from "moment";
import { useMemo } from "react";

const ToggleData = () => {
    const currentDate = useMemo(() => moment().format('YYYY-MM-DD'), []);
    const DaysLater = (days) => useMemo(() => moment().add(days, 'days').format('YYYY-MM-DD'), [days]);

    const toggle01 = [
        { title: 'In Theaters', type: "movie", keyword: "top_rated" },
        { title: 'Popular', type: "movie", keyword: "popular" },
    ];

    const toggle02 = [
        { title: 'Today', path: `primary_release_date.gte=${currentDate}&primary_release_date.lte=${DaysLater(1)}`, type: "movie" },

        { title: 'This week', path: `primary_release_date.gte=${currentDate}&primary_release_date.lte=${DaysLater(6)}`, type: "movie" },
    ];
    const toggle03 = [
        { title: 'Upcoming', type: "movie", keyword: "upcoming" },
        { title: 'Now Playing', type: "movie", keyword: "now_playing" },
    ];

    return { toggle01, toggle02, toggle03 };
};

export default ToggleData;
