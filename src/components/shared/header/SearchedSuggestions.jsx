import { useGetKeywordSearchQuery } from "../../../Redux/Features/Api/movieApi";
import LoadingInline from "../../accessories/InlineLoading";
import NotFoundError from "../../accessories/NotFoundError";

export default function SearchedSuggestions({ inputText }) {
    const { data: keyWords, isLoading, isError, } = useGetKeywordSearchQuery(inputText);

    const findKeywordTitle = (keyword) => {
        if (keyword.media_type === "tv") {
            return keyword.original_name
        } else if (keyword.media_type === "movie") {
            return keyword.original_title
        }
    }

    let content;
    if (isLoading) {
        content = <LoadingInline />
    } else if (!isLoading && keyWords?.results.length === 0 || isError) {
        content = <NotFoundError message="keyword" />
    } else {
        content =
            keyWords?.results.map(keyword => (
                <div key={keyword.id} className="topSlider border-y bg-[#000000dc] py-2 px-3 cursor-pointer flex items-center gap-x-3">
                    <img className="w-10 h-10 rounded-full" src={`https://image.tmdb.org/t/p/original${keyword.poster_path}`} />

                    <span className="text-green-600">{findKeywordTitle(keyword)} </span> in <span className="font-bold">{keyword.media_type.toUpperCase()}</span>
                </div>
            ))
    }
    console.log(keyWords)
    return (
        <div className="h-screen overflow-scroll rounded-lg">
            {content}
        </div>
    );
}
