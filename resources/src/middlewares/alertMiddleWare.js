import { alertCloseAction, alertSendAction, ALERT_SEND_INFORM, ALERT_CLOSE_INFORM } from 'actions/alerts'

let timeoutId = 0

export const alertMiddleWare = store => next => action => {

    if (action.type === ALERT_SEND_INFORM) {
        const { value, type, isSelect, messageId } = action.payload
        const dict = { error: 'error', warning: 'warning', inform: 'inform'}
        const alertType = dict[type] || 'inform'
        
        store.dispatch(alertSendAction({
            text: value,
            status: true,
            type: alertType,
            id: messageId,
            isSelect
        }))

        if (!action.payload.isSelect) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {store.dispatch(alertCloseAction(false))}, 4000)
        }
    }

    if (action.type === ALERT_CLOSE_INFORM ) {
        store.dispatch(alertCloseAction(action.payload))
    }

    return next(action)
}