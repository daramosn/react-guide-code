import React, { useReducer } from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const exisitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const exisitingCartItem = state.items[exisitingCartItemIndex];
        let updatedItems;

        if (exisitingCartItem) {
            const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        };
    }

    if (action.type === 'REMOVE') {

        const exisitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const exisitingItem = state.items[exisitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exisitingItem.price;
        let updatedItems;
        if (exisitingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);

        } else {
            const updatedItem = { ...exisitingItem, amount: exisitingItem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState
};

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };
    const removeItemCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;