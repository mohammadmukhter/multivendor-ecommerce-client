import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("access-token");
    const userDataFetcher = async () => {
      try {
        const userData = await axios.get(
          "http://localhost:3000/users/loggedUser",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (userData) {
          setUser(userData);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    userDataFetcher();
  }, []);

  const authInfo = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
