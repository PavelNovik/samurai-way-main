import axios from "axios";
import {FormData} from "../components/Login/LoginForm";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
    }

})

export const authAPI = {
    getAuthData: () => {
        return instance.get(`auth/me`).then(res => {
            return res.data
        })
    },
    loginUser: (data: FormData)=> {
        return instance.post(`auth/login`, data).then(res => {
            return res.data
        })
    },
    logoutUser: ()=> {
        return instance.delete(`auth/login`).then(res => {
            return res.data
        })
    }
}
