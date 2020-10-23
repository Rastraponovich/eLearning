import { profile } from 'helpers/profileData'
import { PROFILE_LOAD, PROFILE_CHANGE_NAME, REGISTRATION, LOGOUT, LOGIN } from 'actions/profile'

const initialState = {
    profile: {},
    token: null
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {

        case PROFILE_LOAD:
            return { ...state, profile }
            // return { ...state, profile: action.payload.profile, token: action.payload.token }
            
        case PROFILE_CHANGE_NAME:
            return { ...state,
                    profile: {
                    ...state.profile,
                    firstName: action.payload.firstName === undefined ? state.profile.firstName : action.payload.firstName, 
                    lastName: action.payload.lastName === undefined ? state.profile.lastName : action.payload.lastName 
                }
            }
        case LOGOUT:
            return { ...state, token: null }

        case LOGIN:
            return { ...state, token: action.payload.token }

        case REGISTRATION:
            return { ... state, profile: { ...action.payload } }
    
        default: 
            return state
    } 
}  
