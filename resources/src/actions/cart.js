export const CART_LOAD = 'CART_LOAD'
export const CART_ADD = 'CART_ADD'
export const CART_REMOVE = 'CART_REMOVE'
export const CART_DELETE = 'CART_DELETE'


export const cartLoadAction = () => ({
    type: CART_LOAD,
})

export const cartAddAction = (data) => ({
    type: CART_ADD,
    payload: data
})

export const cartRemoveAction = (data) => ({
    type: CART_REMOVE,
    payload: data
})

export const cartDeleteAction = () => ({
    type: CART_DELETE,
})

