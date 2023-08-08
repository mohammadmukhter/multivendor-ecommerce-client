import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUser from "./useUser";

const useGetAllProducts = () => {
    const {userData} = useUser();
    const [axiosSecure] = useAxiosSecure();

    const {data: productsData = [], isLoading: isLoadingProductsData, refetch} = useQuery({
        queryKey: ['productsData', userData?.email],
        enabled: !!localStorage.getItem('access-token') && !!userData?.email,
        queryFn: async()=> {
            try{
                const result = await axiosSecure.get("/products");
                return result.data;
            }catch(err){
                console.log(err);
                return [];
            }
        }
    })
    return [productsData, isLoadingProductsData, refetch];
};

export default useGetAllProducts;