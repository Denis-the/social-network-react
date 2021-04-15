import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5dcf9479-c8ea-474c-9022-737a5cf485ef',
    },
});


export const usersAPI = {
    async requestUsers(pageNumber, perPage, term, followed) {
        let termParam = ''; let searchFollowed = '';
        if (term) termParam = '&term=' + term;
        if (followed != null) searchFollowed = '&friend=' + followed;
        return instance.get(`users?page=${pageNumber}&count=${perPage}${termParam}${searchFollowed}`).then(response => response.data)
    },
    async followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    async unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    async authMe() {
        return instance.get('auth/me').then(response => response.data)
    },
    async login(loginData) {
        return instance.post('auth/login', loginData).then(response => response.data)
    },
    async logout() {
        return instance.delete('auth/login').then(response => response.data)
    },    
    async getCaptchaUrl(userId) {
        return instance.get('security/get-captcha-url').then(response => response.data)
    },
}

export const profileAPI = {
    async getProfileData(userId) {
        return instance.get(`profile/${userId}`).then( response => response.data )
    },
    async getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then( response => response.data )
    },
    async setStatus(newStatus) {
        return instance.put('profile/status', {status:newStatus}).then( response => response.data )
    },
}