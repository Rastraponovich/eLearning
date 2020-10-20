import update from 'react-addons-update'
import { CART_LOAD, CART_ADD, CART_REMOVE, CART_DELETE } from 'actions/cart'

const initialState = {
    cart: {}
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case CART_LOAD: 
            return { ...state, cart }
               

        case CART_ADD:
            return update(state, {
                cart: { 
                    $merge: {
                        [action.payload.id] : { 
                            ...action.payload
                        } 
                    }
                }
            })

        case CART_DELETE:
            return update(state, {
                $set: { cart: [] }
            })
                
        
        default: 
            return state
    } 
}  