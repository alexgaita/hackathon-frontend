import axios from './axios'

export const getMostSearchedCities = () => {
    return axios
        .get(`/statistics/searched-cities`)
        .then((res) => res.data)
}

export const getAccommodationsBased = () => {
    return axios
        .get(`/statistics/accommodations-searched-cities`)
        .then((res) => res.data)
}