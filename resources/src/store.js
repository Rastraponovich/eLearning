import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer } from 'reducers'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { alertMiddleWare } from 'middlewares/alertMiddleWare'
import { initMiddleWare } from 'middlewares/initMiddleWare'
export const history = createBrowserHistory()

const persistConfig = {
    key: 'app',
    storage,
}

export const initStore = () => {
    const initialStore = {}
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(
                logger, 
                initMiddleWare,
                routerMiddleware(history), 
                alertMiddleWare,
            )
        )
    )
    const persistor = persistStore(store)
    return { store, persistor }
}