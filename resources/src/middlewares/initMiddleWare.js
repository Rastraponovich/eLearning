import { profileLoadAction, LOGIN } from 'actions/profile'
import { lessonsLoadAction } from 'actions/lessons'
import { INIT } from 'actions/init'

export const initMiddleWare = (store) => (next) => (action) => {
    if (action.type === INIT) {
        const state = store.getState()
        if (
            !Object.keys(state.profile.profile).length ||
            !Object.keys(state.lessons.lessonsList).length
        ) {
            store.dispatch(lessonsLoadAction())
        }
    }
    return next(action)
}
