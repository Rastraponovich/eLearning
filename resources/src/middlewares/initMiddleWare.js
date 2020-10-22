import { profileLoadAction } from 'actions/profile'
import { lessonsLoadAction } from 'actions/lessons'
import { INIT, LOGIN } from 'actions/init'

export const initMiddleWare = store => next => action => {
    if (action.type === INIT) {
        const state = store.getState()
        if (!Object.keys(state.profile.profile).length || !Object.keys(state.lessons.lessons).length ) {
            store.dispatch(lessonsLoadAction())
        }
    }

    if (action.type === LOGIN) {

        if (action.payload.email.length === 0 || action.payload.password.length === 0) {
            return
        } else {
            store.dispatch(profileLoadAction())
            const state = store.getState()
            if (action.payload.email !== state.profile.profile.email ) {
                alert('неверный логин')
                return 
            } 
            action.payload = {
                ...action.payload,
                test: 'test'
            }
        }
    }

    return next(action)
}