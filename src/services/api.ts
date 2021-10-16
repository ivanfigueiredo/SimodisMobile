import axios from 'axios'

export const API = axios.create({
    baseURL: 'https://backend-simodis.herokuapp.com'
})

