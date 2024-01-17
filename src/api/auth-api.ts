import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
    }

})

export const authAPI = {
    getAuthData: () =>  {
        return instance.get(`auth/me`).then(res => res.data)
    }
}
