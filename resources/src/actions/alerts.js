export const ALERT_LOAD = 'ALERT_LOAD'
export const ALERT_SEND = 'ALERT_SEND'
export const ALERT_CLOSE_INFORM = 'ALERT_CLOSE_INFORM'
export const ALERT_SEND_INFORM = 'ALERT_ADD_INFORM'
export const ALERT_CLOSE = 'ALERT_CLOSE'

export const alertLoadAction = () => ({
    type: ALERT_LOAD,
})

export const alertSendAction = (message) => ({
    type: ALERT_SEND,
    payload: message
})

export const alertCloseInformAction = (value) => ({
    type: ALERT_CLOSE_INFORM,
    payload: value
})

export const alertSendInformAction = (message) => ({
    type: ALERT_SEND_INFORM,
    payload: message
})

export const alertCloseAction = (value) => ({
    type: ALERT_CLOSE,
    payload: value

})