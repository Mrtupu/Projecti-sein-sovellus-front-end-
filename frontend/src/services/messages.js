import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/messages'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async (username) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.get(`${baseUrl}/${username}`, config)
    return response.data
}

const create = async (newObject) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const put = async (id, newObject) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return response.data
}

const remove = async (id) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default { getAll, create, setToken, put, remove }