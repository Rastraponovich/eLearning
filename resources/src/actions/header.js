export const MOBILE_DRAWER_STATE_LOAD = 'MOBILE_DRAWER_STATE_LOAD'
export const MOBILE_DRAWER_STATE_SET = 'MOBILE_DRAWER_STATE_SET'


export const mobileDrawerStateLoadAction = () => ({
    type: MOBILE_DRAWER_STATE_LOAD,
})

export const mobileDrawerStateSetAction = (status) => ({
    type: MOBILE_DRAWER_STATE_SET,
    payload: status
})

