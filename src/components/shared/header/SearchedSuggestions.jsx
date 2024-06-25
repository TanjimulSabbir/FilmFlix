import { useGetKeywordSearchQuery } from "../../../Redux/Features/Api/movieApi";
import LoadingInline from "../../accessories/InlineLoading";
import NotFoundError from "../../accessories/NotFoundError";

export default function SearchedSuggestions({ inputText }) {
    const { data: keyWords, isLoading, isError, } = useGetKeywordSearchQuery(inputText);
    let content;
    if (isLoading) {
        content = <LoadingInline />
    } else if (!isLoading && isError) {
        content = <NotFoundError message="Movies" />
    } else {
        content =
            keyWords?.results.map(keyword => (
                <div key={keyword.id} className="topSlider border-y bg-[#000000dc] text-green-600 py-2 px-3 cursor-pointer">
                    {keyword?.name}
                </div>
            ))

    }
    return (
        <div className="h-screen overflow-y-visible overflow-scroll rounded-lg">
            {content}
        </div>
    );
}
