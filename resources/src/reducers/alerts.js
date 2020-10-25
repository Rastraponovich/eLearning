import { ALERT_LOAD, ALERT_SEND, ALERT_CLOSE } from 'actions/alerts'

const initialState = {
    popup: [],
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_LOAD:
            return {
                ...state,
                popup: {
                    text: '',
                    status: false,
                    type: '',
                    id: '',
                    isSelect: false,
                },
            }

        case ALERT_SEND:
            return { ...state, popup: action.payload }

        case ALERT_CLOSE:
            return {
                ...state,
                popup: {
                    text: '',
                    status: false,
                    type: '',
                    id: '',
                    isSelect: false,
                },
            }

        default:
            return state
    }
}
