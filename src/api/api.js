import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5dcf9479-c8ea-474c-9022-737a5cf485ef',
    },
});


export const usersAPI = {
    getUsers(pageNumber, perPage) {
        return instance.get(`users?page=${pageNumber}&count=${perPage}`).then(response => {
            return response.data;
        })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(response => response.data)
    },
}

export const profileAPI = {
    getProfileData(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( response => response.data )
    }
}