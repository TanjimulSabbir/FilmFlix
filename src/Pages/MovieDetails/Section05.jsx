import { useParams } from 'react-router-dom';
import Layout from './More_Details/DetailsLayout';
import Links from './More_Details/Links';
import Episods from './More_Details/Episods';
import Reviews from './More_Details/Reviews';
import Videos from './Videos';
import Others from './More_Details/Others';

function Section05() {
    const id = useParams().movieId;
    const hashPath = window.location.hash;
    const paths = [
        { title: "Episod", pathName: "#episod", element: <Episods /> },
        { title: "User Reviews", pathName: "#reviews", element: <Reviews /> },
        { title: "Videos", pathName: "#videos", element: <Videos /> },
        { title: "Others", pathName: "#others", element: <Others /> }
    ];

    // Filter paths based on hashPath
    const filteredPaths = paths.filter(item => item.pathName === hashPath);

    // Render the corresponding component if a match is found
    const renderComponent = () => {
        if (filteredPaths.length > 0) {
            return filteredPaths[0].element;
        } else {
            return "No content found for this section"
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
