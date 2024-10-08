import axios from 'axios';

const axiosPublic = axios.create({
    // baseURL: import.meta.env.LOCAL_BASE_URL
    baseURL: 'https://turf-hub.vercel.app/api'
    // baseURL: 'http://localhost:5000'

});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;