export const PROFILE_LOAD = 'PROFILE_LOAD'
export const PROFILE_CHANGE_NAME = 'PROFILE_CHANGE_NAME'
export const USERS_LOAD = 'USERS_LOAD'
export const REGISTRATION = 'REGISTRATION'
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

export const logoutAction = () => ({
    type: LOGOUT,
})

export const loginAction = (data) => ({
    type: LOGIN,
    payload: data,
})
export const profileLoadAction = () => ({
    type: PROFILE_LOAD,
})

export const usersLoadAction = () => ({
    type: USERS_LOAD,
})

export const profileChangeNameAction = (name) => ({
    type: PROFILE_CHANGE_NAME,
    payload: name,
})

export const registrationAction = (profileData) => ({
    type: REGISTRATION,
    payload: profileData,
})
