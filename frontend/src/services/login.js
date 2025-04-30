import axios from 'axios'
const baseUrl = 'http://localhost:300e/api/login'

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }