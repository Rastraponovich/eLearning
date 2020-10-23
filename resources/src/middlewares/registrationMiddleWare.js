import { profileLoadAction, loginAction, registrationAction, REGISTRATION, LOGIN } from 'actions/profile'
import { lessonsLoadAction } from 'actions/lessons'
import { INIT } from 'actions/init'
import { result } from 'lodash'
0
export const registrationMiddleWare = store => next => action => {

    if (action.type === REGISTRATION) {
        const { password, rePassword } = action.payload
        //проверка паролей
        if (password === rePassword ) {
           //поиск юзера
            // fetch(url, options)
            //     .then(res => res.json)
            //     .then(userData => {
            //    store.dispatch(loginAction(userData))
            //} )
            // }
            store.dispatch(loginAction(action.payload))
        } 
    }

    if (action.type === LOGIN) {

        if (action.payload.email.length === 0 || action.payload.password.length === 0) {
            return
        } else {
            //Авторизация на сервере и получение токена
            // const options = {
            //     method: 'POST',
            //     header: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         email: action.payload.email,
            //         password: action.payload.password
            //     })
            // }
            // const url = 'http://localhost:3000'

            // fetch(url, options)
            //     .then(res => res.json)
            //     .then(result => {
            //         console.log(result)
            //     })
            
            //     if (!result.token) {
            //     return
            // }

            // action.payload = {
            //     ...result
            // }
            

            store.dispatch(profileLoadAction())
            const state = store.getState()
            if (action.payload.email !== state.profile.profile.email ) {
                return 
            } 
            action.payload = {
                ...action.payload,
                token: '12123'
            }
        }
    }

    return next(action)
}