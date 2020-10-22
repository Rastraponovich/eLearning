import { profile } from 'helpers/profileData'
import { PROFILE_LOAD, PROFILE_CHANGE_NAME } from 'actions/profile'

const initialState = {
    profile: {},
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {

        case PROFILE_LOAD:
            return { ...state, profile }
            
        case PROFILE_CHANGE_NAME:
            return { ...state,
                    profile: {
                    ...state.profile,
                    firstName: action.payload.firstName === undefined ? state.profile.firstName : action.payload.firstName, 
                    lastName: action.payload.lastName === undefined ? state.profile.lastName : action.payload.lastName 
                }
            }

        default: 
            return state
    } 
}  
