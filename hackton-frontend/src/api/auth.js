import axios from './axios'

export const register = (data) => {
    return axios.post(`/auth/register`, { ...data }).then((res) => res.data)
}

export const login = (email, password) => {
    return axios.post('/auth/login', { email, password }).then((res) => res.data)
}
