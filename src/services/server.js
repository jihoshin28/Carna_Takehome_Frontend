import axios from 'axios'

// let cartToken = localStorage.getItem('token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    'Access-Control-Allow-Origin': '*',
    // "Authorization": shopperToken
}

export default axios.create({
    baseURL: 'https://localhost:3001/api',
    headers: headers 
})