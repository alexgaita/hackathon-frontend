import axios from 'axios'


let axiosInstance = axios.create({
    baseURL: `http://localhost:5001/api`
})

axiosInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token')

    config.headers.Authorization = `Bearer ${token}`

    return config
}, (error) => {
    Promise.reject(error)
})

export default axiosInstance
