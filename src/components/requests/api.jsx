import Axios from 'axios'

const api = Axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': '',
    },
})

export default api