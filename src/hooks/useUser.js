import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

const useUser = ()=> {
    const { user: userData, loading } = useContext(AuthContext);

    return {
        userData, 
        loading
    };
}

export default useUser;