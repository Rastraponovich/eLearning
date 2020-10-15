import update from 'react-addons-update'

import { profile } from 'helpers/profileData'

import { PROFILE_LOAD, PROFILE_CHANGE_NAME } from 'actions/profile'

const initialState = {
    profile: [],
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {

        case PROFILE_LOAD:
            return { ...state, profile }
            
        case PROFILE_CHANGE_NAME:

            let firstName = action.payload.firstName === undefined ? state.profile.firstName : action.payload.firstName
            let lastName = action.payload.lastName === undefined ? state.profile.lastName : action.payload.lastName
            
            return update(state, {
                profile: { 
                    firstName: { $set: firstName },
                    lastName: { $set: lastName }
                 }
            })
        default: 
            return state
    } 
}  
