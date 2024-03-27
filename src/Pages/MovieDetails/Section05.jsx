import React from 'react';
import { useParams } from 'react-router-dom';
import Links from './detailsLayout/Links';
import Episods from './detailsLayout/Episods';
import Reviews from './detailsLayout/Reviews';
import Others from './detailsLayout/Others';

const Videos = React.lazy(() => import('./Videos'));


function Section05() {
    const id = useParams().movieId;
    const hashPath = window.location.hash;
    const paths = [
        { title: "Episod", pathName: "#episods", element: <Episods /> },
        { title: "User Reviews", pathName: "#reviews", element: <Reviews /> },
        {
            title: "Videos", pathName: "#videos", element: <React.Suspense fallback={<p className='text-green-500'>Loading...</p>}>
                <Videos id={id} howMuch="multi" />
            </React.Suspense>
        },
        { title: "Others", pathName: "#others", element: <Others /> }
    ];

    // Filter paths based on hashPath
    const filteredPaths = paths.filter(item => item.pathName === hashPath);

    // Render the corresponding component if a match is found
    const renderComponent = () => {
        if (filteredPaths.length > 0) {
            return filteredPaths[0].element;
        } else {
            return <Episods />
        }
    };

    console.log({ hashPath, filteredPaths })

    return (
        <>
            <div className='flex space-x-7'>
                {paths.map(path => <Links key={path.title} items={path} hashPath={hashPath} />)}
            </div>
            <div className='pt-10 pb-14'>
                {renderComponent()}
            </div>
        </>
    );
}

export default Section05;
