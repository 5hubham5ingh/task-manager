import { useQuery } from "@tanstack/react-query";

export default useSearchUser = () => {
    const searchUserQuery = useQuery();

    const search = (user) => {
        searchUserQuery.refetch(user);
    }

    return search;
}