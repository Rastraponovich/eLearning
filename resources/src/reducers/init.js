import { INIT } from 'actions/init'

const initialState = {
    token: ''
}

export const initReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case INIT: 
            return { ...state, token: '' }

        default: 
            return state
    } 
}  