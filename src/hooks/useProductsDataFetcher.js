import axios from "axios";
import { useEffect, useState } from "react";

const useProductsDataFetcher = () => {
  
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    const dataFetcher = async () => {
       setLoading(true);
        const data = await axios
        .get(
          `https://api.jsonbin.io/v3/b/${
            import.meta.env.VITE_jsonBin_id
          }/latest`,
          {
            headers: {
              "X-Master-Key": import.meta.env.VITE_jsonBin_key,
            },
          }
        );
     if(data){
        const products = data.data.record.products;
        setProducts(products);
        setLoading(false);
     }
    };
    dataFetcher();
  }, []);

  return [products, loading];
   
};

export default useProductsDataFetcher;