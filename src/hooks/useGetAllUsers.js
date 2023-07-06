import { useState } from "react";

const useGetAllUsers = ()=> {
    const [allUsers, setAllUsers] = useState([]);
     return {allUsers}
}

export default useGetAllUsers;