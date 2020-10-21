import { INIT, LOGOUT } from 'actions/init'

const initialState = {
    token: ''
}

export const initReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case INIT: 
            return { ...state, token: '' }

        case LOGOUT:
            return { ...state, token: '1' }

        default: 
            return state
    } 
}  