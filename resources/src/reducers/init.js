import { INIT, LOGOUT, LOGIN } from 'actions/init'

const initialState = {
    token: null
}

export const initReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case INIT: 
            return { ...state, token: null }

        case LOGOUT:
            return { ...state, token: null }

        case LOGIN:
            return { ...state, token: '1132' }
        
            default: 
            return state
    } 
}  