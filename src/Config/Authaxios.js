import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const handleUnauthorizedError = (error) => {

  localStorage.clear();
  toast.error(error);

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
};

const handleNetworkError = (error) => {
  toast.error("Network error. Please check your internet connection.");
};
const successId='12'
axios.interceptors.request.use(
  (config) => {
    config.headers['X-CoinAPI-Key'] = import.meta.env.VITE_COIN_API_KEY;
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;

    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const successMessage = response.data.message;
    if (
      successMessage &&
      ["post", "delete","put"].includes(response.config.method.toLowerCase())
    ) {
      toast.success(successMessage,{successId});
    }

    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        handleUnauthorizedError(error.response?.data?.message);
        return Promise.reject(new Error("Unauthorized access"));
      } else if (error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
      }
    } else if (error.request) {
      handleNetworkError(error);
    } else {
    }
    return Promise.reject(error);
  }
);

export default axios;

