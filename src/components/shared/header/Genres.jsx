import { useGetAllDataSlashQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import { FaCaretRight } from "react-icons/fa6";

function Genres() {
    const { data, isloading, isError } = useGetAllDataSlashQuery({ type: "genre", id: "", keyword: "movie/list" });

    if (isloading) return <Loading />

    const handleGenres = (id) => {
        console.log(id)
    }

    console.log(data?.genres, "from genres")
    return (
        <div className="grid grid-cols-3 items-center space-x-1 bg-[#000000ae] pt-7 pb-5  px-3 text-sm rounded-lg">
            {data?.genres?.map(genre => <div onClick={() => handleGenres(genre.id)} key={genre.id} className="flex items-center space-x-2 py-2 text-gray-500 cursor-pointer transition duration-500 hover:text-green-500">
                <FaCaretRight className="text-xs" />
                <p className="">{genre.name}</p>
            </div>)}
        </div>

    )
}

export default Genres;