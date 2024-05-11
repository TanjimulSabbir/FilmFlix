const movieGenres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
];

const tvGenres = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' }
]


export const genresMovieData = [
    { "keywordTitle": "Sort By", "keywords": ["Popular", "New Releases", "Top Rated", "Upcoming"] },
    { "keywordTitle": "Genres", "keywords": movieGenres },
    { "keywordTitle": "New Releases", "keywords": ["Last 3 Months", "Last 6 Months", "Last 12 Months"] },
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "NC-17", "R", "NR"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] },
    { "keywordTitle": "Metascore", "keywords": ["90 or Higher", "80 or Higher", "70 or Higher", "60 or Higher", "50 or Higher"] }
];
export const genresTvData = [
    { "keywordTitle": "Sort By", "keywords": ["Airing Today", "New Releases", "Top Rated", "Popular"] },
    { "keywordTitle": "Genres", "keywords": tvGenres },
    { "keywordTitle": "New Releases", "keywords": ["Last 3 Months", "Last 6 Months", "Last 12 Months"] },
    { "keywordTitle": "MPAA Rating", "keywords": ["G", "PG", "PG-13", "NC-17", "R", "NR"] },
    { "keywordTitle": "IMDb Rating", "keywords": ["9.0 or Higher", "8.0 or Higher", "7.0 or Higher", "6.0 or Higher", "5.0 or Higher"] },
    { "keywordTitle": "Metascore", "keywords": ["90 or Higher", "80 or Higher", "70 or Higher", "60 or Higher", "50 or Higher"] }
];

const changedMovieKeywords = [
    { previous: "Popular", now: "popular" },
    { previous: "New Releases", now: "now_playing" },
    { previous: "Upcoming", now: "upcoming" },
    { previous: "Top Rated", now: "top_rated" }
];
const changedTvKeywords = [
    { previous: "Airing Today", now: "airing_today" },
    { previous: "New Releases", now: "on_the_air" },
    { previous: "Popular", now: "popular" },
    { previous: "Top Rated", now: "top_rated" }
];

export const getMovieNewKeyword = (previousKeyword) => {
    const changedKeyword = changedMovieKeywords.find(keyword => keyword.previous === previousKeyword);
    return changedKeyword ? changedKeyword.now : previousKeyword;
}
export const getTvNewKeyword = (previousKeyword) => {
    const changedKeyword = changedTvKeywords.find(keyword => keyword.previous === previousKeyword);
    return changedKeyword ? changedKeyword.now : previousKeyword;
}