import update from 'react-addons-update'
import { MOBILE_DRAWER_STATE_LOAD, MOBILE_DRAWER_STATE_SET } from 'actions/header'

const initialState = {
    mobileDrawer: false
}

export const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case MOBILE_DRAWER_STATE_LOAD: 
            return { ...state, mobileDrawer }
               

        case MOBILE_DRAWER_STATE_SET:
            return update(state, {
                $set: { mobileDrawer: action.payload },
            })
        
        default: 
            return state
    } 
}  