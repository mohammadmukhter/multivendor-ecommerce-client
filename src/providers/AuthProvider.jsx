import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userToken = localStorage.getItem("access-token");

  useEffect(() => {
    const userFetcher = async () => {
      try {
        const fetchedData = await axios.get(
          "http://localhost:3000/users/loggedUser",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log("hello");
        setUser(fetchedData.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setUser(null);
        setLoading(false);
      }
    };

    userFetcher();
  }, [userToken]);

  // const userToken = localStorage.getItem("access-token");
  // const {
  //   isLoading: userLoading,
  //   data: userData = null,
  //   refetch,
  //   isFetched,
  // } = useQuery({
  //   queryKey: ["userData", userToken],
  //   enabled: !!userToken,
  //   queryFn: async () => {
  //     const fetchedData = await axios.get(
  //       "http://localhost:3000/users/loggedUser",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //         },
  //       }
  //     );
  //     return fetchedData.data;
  //   },
  //   initialData: null,
  // });

  const authInfo = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
