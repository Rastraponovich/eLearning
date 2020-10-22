export const INIT = 'INIT'
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'


export const initAction = () => ({
    type: INIT,
})

export const logoutAction = () => ({
    type: LOGOUT,
})

export const loginAction = (data) => ({
    type: LOGIN,
    payload: data
})


