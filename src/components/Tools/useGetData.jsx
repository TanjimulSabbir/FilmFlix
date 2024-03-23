import { useGetAllDataSlashQuery } from '../../Redux/Features/Api/movieApi';
import Loading from '../accessories/Loading';

export default function useGetData({ type, id, keyword }) {
    const { data, isLoading, isError } = useGetAllDataSlashQuery({ type, id, keyword });

    if (isLoading) return <Loading />;
    if (isError) return <p>Error occurred</p>;

    return data;
}
