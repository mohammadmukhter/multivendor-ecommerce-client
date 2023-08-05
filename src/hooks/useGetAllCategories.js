import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";


const useGetAllCategories = () => {
    const {userData} = useUser();
    const [axiosSecure] = useAxiosSecure()

    const {data: categoriesData=[], isLoading: isCategoriesLoading, refetch} = useQuery({
        queryKey: ['categoriesData', userData.email],
        enabled: !!userData && !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            try{
                const result = await axiosSecure.get('/categories');
                return result.data; 
            }catch(err){
                console.log(err);
                return [];
            }
        }
    })
    return [categoriesData, isCategoriesLoading, refetch];
};

export default useGetAllCategories;