import { useGetAllDataSlashQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom"

function Genres() {
    const { data, isloading, isError } = useGetAllDataSlashQuery({ type: "genre", id: "", keyword: "movie/list" });

    if (isloading) return <Loading />



    const handleGenres = (id) => {

    }

    console.log(data?.genres, "from genres")
    return (
        <div className="grid grid-cols-3 items-center  bg-[#000000c2] border border-gray-900 rounded-lg px-5 py-7 z-50">
            {data?.genres?.map(genre => <div onClick={() => handleGenres(genre.id)} key={genre.id} className="flex items-center space-x-1 py-2 text-gray-500 cursor-pointer transition duration-500 hover:text-green-500">
                <FaCaretRight className="text-[10px]" />
                <Link to={`/movies/${genre.id}`} className="text-xs">{genre.name}</Link>
            </div>)}
        </div>

    )
}

export default Genres;