import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
    }

})

export const profileAPI = {
    getProfileUsers: (userId: number | string) => {
        return instance.get(`profile/` + userId).then(res => res.data)
    },
    getProfileStatus: (userId: number | string) => {
        return instance.get(`profile/status/` + userId).then(res => res.data)
    },
    updateProfileStatus: (status: string) => {
        return instance.put('profile/status', {status})
            .then(res => res.data)
    }
}
