import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("access-token");
  const { isLoading: userLoading, data: userData = [] } = useQuery({
    queryKey: ["userData", userToken],
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const fetchedData = await axios.get(
        "http://localhost:3000/users/loggedUser",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      return fetchedData.data;
    },
  });

  if (!userLoading) {
    console.log(userData);
  }

  const authInfo = {
    userData,
    userLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
