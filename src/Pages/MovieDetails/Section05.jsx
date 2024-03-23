import { useParams } from 'react-router-dom';
import Layout from './More_Details/MoreLayout';
import Links from './More_Details/Links';

function Section05() {
    const id = useParams().movieId;
    const paths = [
        { title: "Episod", pathName: `/movie/${id}/#episod` },
        { title: "User Reviews", pathName: `/movie/${id}/#reviews` },
        { title: "Videos", pathName: `/movie/${id}/#videos` },
        { title: "Others", pathName: `/movie/${id}/#others` }
    ];
    return (
        <>
            <div className='flex items-center space-x-5'>
                {paths.map(path => <Links key={path.title} path={path} />)}
            </div>
            <Layout />
        </>
    )
}

export default Section05;