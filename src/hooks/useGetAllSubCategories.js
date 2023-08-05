import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";

const useGetAllSubCategories = () => {
    const {userData} = useUser();
    const [axiosSecure] = useAxiosSecure();

    const {data: subCategoriesData = [], isLoading: isLoadingSubCategories, refetch} = useQuery({
        queryKey: ['subCategoriesData', userData.email],
        enabled: !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            try{
                const result =await axiosSecure.get("/subCategories")
                return result.data;
            }catch(err){
                return [];
            }
        }
    })

    return [subCategoriesData, isLoadingSubCategories, refetch];
};

export default useGetAllSubCategories;