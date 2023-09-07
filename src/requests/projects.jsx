import api from './api'

export const get_top_projects = async (client_id, role) => {
    try {
        const res = await api.get("/api/db/get_top_projects/")
        return res
    } catch (error) {
        return error
    }
}

export const get_projects = async () => {
    try {
        const res = await api.get("/api/db/get_projects/")
        return res
    } catch (error) {
        return error
    }
}