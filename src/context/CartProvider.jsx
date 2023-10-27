import { useReducer } from 'react'
import { CartContext } from './CartContext'

const initialState = []

export const CartProvider = ({ children }) => {

    const shopReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Item':
                return [...state, action.payload]
            case '[CART] Add One Item':
                return state.map(item => {
                    const quant = item.quantity + 1
                    if (item.id === action.payload) return { ...item, quantity: quant }
                    return item
                })
            case '[CART] Lower One Item':
                return state.map(item => {
                    const quant = item.quantity - 1
                    if (item.id === action.payload && item.quantity > 1) return { ...item, quantity: quant }
                    return item
                })
            case '[CART] Remove Item':
                return state.filter(shop => shop.id !== action.payload)
            default:
                return state;
        }
    }

    const [shopList, dispatch] = useReducer(shopReducer, initialState)

    const addItem = (shop) => {
        shop.quantity = 1
        const action = {
            type: '[CART] Add Item',
            payload: shop
        }
        dispatch(action)
    }
    const addQuantity = (id) => {
        const action = {
            type: '[CART] Add One Item',
            payload: id
        }
        dispatch(action)
    }
    const lowerQuantity = (id) => {
        const action = {
            type: '[CART] Lower One Item',
            payload: id
        }
        dispatch(action)
    }
    const removeItem = (id) => {
        const action = {
            type: '[CART] Remove Item',
            payload: id
        }
        dispatch(action)
    }
    
    return (

        <CartContext.Provider value={{ shopList, addItem, addQuantity, lowerQuantity, removeItem }}>
            {children}
        </CartContext.Provider>

    )
}
