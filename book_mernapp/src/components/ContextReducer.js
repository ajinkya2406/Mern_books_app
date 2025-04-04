import React, { Children, createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
switch(action.type){
    case 'ADD':
        return [...state,{id:action.id,name:action.name,qty:action.qty, size: action.size,price: action.price,
             img: action.img
            }]
    case 'REMOVE':
            let newArr = [...state]
            newArr.splice(action.index, 1)
        return newArr;
        case 'UPDATE':
            let arr = [...state];
            arr = arr.map((book) => {
                if (book.id === action.id) {  // Fix: Use action.id instead of index
                    return {
                        ...book,
                        qty: parseInt(action.qty) + book.qty,
                        price: action.price + book.price
                    };
                }
                return book;
            });
            return arr;  // Fix: Return the updated state
        
    default:
            console.log("error in reducer");
}
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
