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
    useEffect(() => {
        if (data?.genres?.length > 0) disPatch(addGenresData(data.genres))
    }, [data, disPatch])

    if (isloading) return <Loading />

    return (
        <div className="grid grid-cols-3 items-center bg-[#000000f7] rounded-lg p-5 z-50 shadow-xl">
            {data?.genres?.map(genre => <Link to={`/genres/${genre.name}/${genre.id}`} key={genre.id} className="flex items-center space-x-1 py-2 text-xs text-gray-300 cursor-pointer transition duration-300 hover:text-green-500">
                <FaCaretRight className="text-[10px]" />
                 {genre.name}
            </Link>)}
        </div>

    )
}

export default Genres;