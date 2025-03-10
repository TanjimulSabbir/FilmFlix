import React from 'react';
import Links from './detailsLayout/Links';
import Seasons from './detailsLayout/Seasons';
import Reviews from './detailsLayout/Reviews';
import Others from './detailsLayout/Others';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Videos = React.lazy(() => import('./Videos'));

function Section05() {
    const movie = useSelector(state => state.movieData.clickedMovieDetails)
    const { id, number_of_seasons } = movie || {};
    const hashPath = window.location.hash;
    const path = useLocation().pathname.split("/")[1];

    const paths = [
        { title: `Seasons (${path === "tv" ? number_of_seasons : "0"})`, pathName: "#episods", element: path === "tv" && hashPath === "#episods" && <Seasons /> },
        { title: "User Reviews", pathName: "#reviews", element: <Reviews /> },
        {
            title: "Videos", pathName: "#videos", element: <React.Suspense fallback={<p className='text-green-500'>Loading...</p>}>
                <Videos id={id} howMuch="multi" />
            </React.Suspense>
        },
        { title: "Others", pathName: "#others", element: <Others /> }
        // { title: "All Season", pathName: "#episods", element: <Season /> }
    ];

    // Filter paths based on hashPath
    const filteredPaths = paths.filter(item => item.pathName === hashPath);

    // Render the corresponding component if a match is found
    const renderComponent = () => {
        if (filteredPaths.length > 0) {
            return filteredPaths[0].element;
        } else {
            return <Reviews />
        }
    };

    return (
        <>
            <div className='flex justify-between md:justify-start md:space-x-7'>
                {paths.map(path => <Links key={path.title} items={path} hashPath={hashPath} />)}
            </div>
            <div className='pt-10 pb-14'>
                {renderComponent()}
            </div>
        </>
    );
}

export default Section05;
