import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllProducts = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data: productsData = [], isLoading: isLoadingProductsData, refetch} = useQuery({
        queryKey: ['productsData'],
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