import { CART_LOAD, CART_ADD, CART_REMOVE, CART_DELETE } from 'actions/cart'

const initialState = {
    cart: {}
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case CART_LOAD: 
            return { ...state, cart }
               

        case CART_ADD:
            return {
                ...state,
                cart: { 
                    ...state.cart,
                    [action.payload.id] : { 
                        ...state.cart[action.payload.id],
                        ...action.payload
                    } 
                }
            }
        
        case CART_REMOVE: 
            const { cart } = state
            const { [action.payload]: _, ...newCart } = cart

            return {
                ...state,
                cart: newCart,
            }

        case CART_DELETE:
            return {
                ...state,
                cart: [],
            }
                
        default: 
            return state
    } 
}  