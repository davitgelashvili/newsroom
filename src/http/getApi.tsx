import axios, { Method } from "axios"

type mytype = {
    url: string,
    method: Method
    data?: Object
}

const getApi = async ({ url, method, data }: mytype) => {
    try {
        const token = localStorage.getItem('accessToken');

        const restpons = await axios({
            url,
            method,
            data,
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
                'Content-Type': 'application/json'
            }
        })
        return restpons
    } catch (error) {
        console.error(error)
    }
}

export default getApi