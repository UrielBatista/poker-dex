import axios from 'axios'
require('dotenv').config()

const api = axios.create({
    
    baseURL: process.env.REACT_APP_URL_BASE, 
    headers: {
        'Content-Type': 'application/json',
    }   
})

export default api