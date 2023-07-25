import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create(
    {
        baseURL: "http://localhost:3000/",
    }
);

const useAxiosSecure = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        axiosSecure.interceptors.request.use(config=> {
            const token = localStorage.getItem('access-token');
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            response=> {
                return response;
            }, 
            async error => {
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    navigate('/login');
                }

                return Promise.reject(error);
            }
        )
    }, [navigate])
    return [axiosSecure];
};

export default useAxiosSecure;