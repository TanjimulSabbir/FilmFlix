import { useDispatch } from "react-redux";
import { useGetAllDataSlashQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { addGenresData } from "../../../Redux/Features/movies/moviesSlice";

function Genres() {
    const { data, isloading, isError } = useGetAllDataSlashQuery({ type: "genre", id: "", keyword: "movie/list" });

    const disPatch = useDispatch();

    const handleGenres = (id) => {

    }

    useEffect(() => {
        if (data?.genres?.length > 0) disPatch(addGenresData(data.genres))
    }, [data, disPatch])

    if (isloading) return <Loading />

    console.log(data?.genres, "from genres")
    return (
        <div className="grid grid-cols-3 items-center  bg-[#000000f7] rounded-lg p-5 z-50 shadow-xl">
            {data?.genres?.map(genre => <div onClick={() => handleGenres(genre.id)} key={genre.id} className="flex items-center space-x-1 py-2 text-gray-300 cursor-pointer transition duration-500 hover:text-green-500">
                <FaCaretRight className="text-[10px]" />
                <Link to={`/movies/${genre.id}`} className="text-xs">{genre.name}</Link>
            </div>)}
        </div>

    )
}

export default Genres;