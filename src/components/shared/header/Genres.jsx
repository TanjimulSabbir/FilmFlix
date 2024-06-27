import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FaCaretRight } from "react-icons/fa6";

import { useGetAllDataSlashQuery } from "../../../Redux/Features/Api/movieApi";
import { addGenresData } from "../../../Redux/Features/movies/moviesSlice";
import LoadingInline from "../../accessories/InlineLoading";

function Genres() {
    const { data, isloading } = useGetAllDataSlashQuery({ type: "genre", id: "", keyword: "movie/list" });

    const disPatch = useDispatch();
    useEffect(() => {
        if (data?.genres?.length > 0) disPatch(addGenresData(data.genres))
    }, [data, disPatch])

    if (isloading) return <LoadingInline />

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-[#000000] border border-[#343434] rounded-xl p-3 z-50 shadow-xl w-[300px] sm:w-[500px] md:w-[660px] lg:w-[640px] lg:-translate-x-[40%]">
            {data?.genres?.map(genre => <Link to={`/genres/${genre.name}/${genre.id}`} key={genre.id} className="flex items-center space-x-1 py-2 text-xs text-gray-200 cursor-pointer transition duration-300 hover:text-green-500">
                <FaCaretRight className="text-[10px]" />
                {genre.name}
            </Link>)}
        </div>

    )
}

export default Genres;