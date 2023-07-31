import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllUsers = ()=> {
    const [axiosSecure] = useAxiosSecure();
    
    const {data: allUsers = [], isLoading} = useQuery({
        queryKey: ['allUsers'],
        enabled: !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            const allUsersData = await axiosSecure.get("/users");
            // console.log(allUsersData.data);
            return allUsersData.data;
        }
    })

     return [allUsers, isLoading];
}

export default useGetAllUsers;