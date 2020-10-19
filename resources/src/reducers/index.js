import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { profileReducer } from './profile'
import { alertReducer } from './alerts'
import { lessonReducer } from './lessons'
import { headerReducer } from './header'

export const createRootReducer = (history) => combineReducers({
    profile: profileReducer,
    alert: alertReducer,
    lessons: lessonReducer,
    header: headerReducer,
    router: connectRouter(history)
})

