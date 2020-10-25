import { INIT } from 'actions/init'

const initialState = {}

export const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return { ...state }

        default:
            return state
    }
}
