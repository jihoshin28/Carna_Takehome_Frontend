import axios from 'axios'

let token = localStorage.getItem('token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Authorization": token
}

export default axios.create({
    baseURL: 'http://localhost:3001/api/',
    headers: headers 
})