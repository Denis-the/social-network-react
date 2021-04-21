import profileReducer, { setStatus, setProfile } from "../../redux/profileReducer";


describe('test profileRedusers setStatus', () => {
    // 1 test data
    const initialProfileState = {
        status: null,
    }
    const newStatus = 'My new Status';

    it('profileReducer should set a new status', () => {
        const setStatusAction = setStatus(newStatus);
        const newStateWithStatus = profileReducer(initialProfileState, setStatusAction);
    
        expect(newStateWithStatus.status === newStatus).toBe(true) ;
    }) 

    it('profileReducer should set a new status without mutating initial state', () => {
        const setStatusAction = setStatus(newStatus);
        const newStateWithStatus = profileReducer(initialProfileState, setStatusAction);
    
        expect(newStateWithStatus.status === newStatus).toBe(true) ;
        expect(initialProfileState.status === null).toBe(true);
    })
})


describe('test profileRedusers setProfile', ()=> {
    const initialProfileState = {
        profileInfo: null,
    }
    const profileInfo = {
        fullName: 'John Doe',
        photos: {large: 'http://some-url.com/large-image.jpg',
                 small: 'http://some-url.com/large-image.jpg',},

    }

    it('profile reducer should correctly set profile info without mutating initial state ', () => {
        const action = setProfile(profileInfo);
        const newState = profileReducer(initialProfileState, action);

        expect(newState.profileInfo.fullName === profileInfo.fullName).toBe(true);
        expect(newState.profileInfo.photos.large === profileInfo.photos.large).toBe(true);
        expect(newState.profileInfo.photos.small === profileInfo.photos.small).toBe(true);
        expect(initialProfileState.profileInfo === null).toBe(true);
    })

})