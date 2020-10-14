import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'containers/AppContainer'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { initStore } from './store'

const { store, persistor } = initStore()

ReactDOM.render(
    <Provider store={ store } >
        <PersistGate persistor={ persistor }>
            <AppContainer />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)