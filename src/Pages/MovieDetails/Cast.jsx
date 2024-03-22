import { useGetCastsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";

function Cast({ id }) {
    const { data: castsData, isLoading, isError } = useGetCastsQuery({ type: "movie", id }, { skip: !id });
    let content;

    if (isLoading) content = <Loading />

    if (isError) content = "Data fetching error";

    if (!isLoading && !isError && castsData.id) {
        content = castsData.cast.map(item => item.name)
    }
    return (
        <div>
            {content}
            <p>This is casts component</p>
        </div>
    )
}

export default Cast;