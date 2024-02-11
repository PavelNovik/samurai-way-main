import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
    }

})

export const securityAPI = {
    getCaptcha: () => {
        return instance.get(`security/get-captcha-url`).then(res => {
            return res.data
        })
    },

}