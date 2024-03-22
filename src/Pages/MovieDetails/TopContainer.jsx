import { IoIosStar } from 'react-icons/io';
import { useGetMovieDetailsQuery } from '../../Redux/Features/Api/movieApi';
import Loading from '../../components/accessories/Loading';
import { useParams } from 'react-router-dom';
import { TextRuntime } from '../../components/Tools/Others';

function TopContainer() {
    const id = useParams().movieId

    const { data: Movies = {}, isLoading, isError, error } = useGetMovieDetailsQuery(id, { refetchOnFocus: false, refetchOnMountOrArgChange: false, });


    console.log(id, Movies)
    let content;

    if (isLoading) {
        content = <Loading />
    }
    if (isError) {
        content = "Data fetching error"
    }

    if (!isLoading && !isError) {
        // eslint-disable-next-line no-unused-vars
        const { adult, backdrop_path, belongs_to_collection, budget, genres, homepage, id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
        } = Movies;

        content = <div className='relative'>
            <div className='absolute inset-0 flex items-center bg-black'>
                <div>
                    <h2 className='mb-5'>{original_title}</h2>
                    <p className='flex items-center'>
                        <span className="flex items-center space-x-1">
                            <IoIosStar className="text-yellow-500" />
                            <span>{vote_average.toFixed(1)}</span>
                        </span>.
                        <span>{release_date.split("-")[0]}</span>.
                        <span>{TextRuntime(runtime)}</span>.
                        <span>{genres[0].name}</span>
                    </p>
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} srcSet="" />
        </div>

    }
    return (
        <div>
            {content}
        </div>
    )
}

export default TopContainer;