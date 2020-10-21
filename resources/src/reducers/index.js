import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { profileReducer } from './profile'
import { alertReducer } from './alerts'
import { lessonReducer } from './lessons'
import { cartReducer } from './cart'
import { headerReducer } from './header'
import { initReducer } from './init'

export const createRootReducer = (history) => combineReducers({
    profile: profileReducer,
    alert: alertReducer,
    lessons: lessonReducer,
    header: headerReducer,
    cart: cartReducer,
    init: initReducer,
    router: connectRouter(history)
})

