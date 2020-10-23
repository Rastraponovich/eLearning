import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from 'containers/AppContainer'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { initStore } from './store'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
import './layout/css/style.css'
import { BrowserRouter } from 'react-router-dom'

const { store, persistor } = initStore()

ReactDOM.render(
    <Provider store={ store } >
        <PersistGate persistor={ persistor }> 
            <ConnectedRouter history={ history }>     
                <AppContainer />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)