import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'http://localhost:8090/api/v1/auth', // match your Spring Boot port
  withCredentials: true,
});


export const userApi = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});

// Interceptor to add Authorization header
userApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export const adminApi = axios.create({
  baseURL: "http://localhost:8090/admin",
  withCredentials: true,
});

// Interceptor to add Authorization header
adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    console.log(token)// get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
