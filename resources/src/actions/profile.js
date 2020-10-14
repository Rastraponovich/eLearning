export const PROFILE_LOAD = 'PROFILE_LOAD'
export const PROFILE_CHANGE_NAME = 'PROFILE_CHANGE_NAME'
export const USERS_LOAD = 'USERS_LOAD'

export const profileLoadAction = () => ({
    type: PROFILE_LOAD,
})

export const usersLoadAction = () => ({
    type: USERS_LOAD,
})

export const profileChangeNameAction = (name) => ({
    type: PROFILE_CHANGE_NAME,
    payload: name
})

