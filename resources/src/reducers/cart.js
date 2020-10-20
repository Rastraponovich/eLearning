import update from 'react-addons-update'
import { CART_LOAD, CART_ADD, CART_REMOVE, CART_DELETE, CART_PLUS_ITEM, CART_MINUS_ITEM  } from 'actions/cart'

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
        
        case CART_REMOVE: 
            const { cart } = state
            const { [action.payload]: _, ...newCart } = cart

            return update(state, {
                $set: { cart: newCart }
            })

        case CART_DELETE:
            return update(state, {
                $set: { cart: [] }
            })
                
        case CART_PLUS_ITEM: 
            return update(state, {
                cart: {
                    [action.payload]: {
                        $set: { 
                            ...state.cart[action.payload],
                            quantity: state.cart[action.payload].quantity+1
                        }
                    }
                }
            })

        case CART_MINUS_ITEM: 
            return update(state, {
                cart: {
                    [action.payload]: {
                        $set: { 
                            ...state.cart[action.payload],
                            quantity: state.cart[action.payload].quantity === 0 ? 0 : state.cart[action.payload].quantity-1 }
                    }
                }
            })

        default: 
            return state
    } 
}  