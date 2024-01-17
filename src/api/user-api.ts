import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "58d16126-c44d-4aae-84b6-9bdc00838cf2"
    }

})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) =>  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow: (userId: number | string)=> {
       return  instance.post(`follow/${userId}`, {}).then(res=>res.data)
    },
    unfollow: (userId: number | string)=> {
       return  instance.delete(`follow/${userId}`).then(res=>res.data)
    }
}
