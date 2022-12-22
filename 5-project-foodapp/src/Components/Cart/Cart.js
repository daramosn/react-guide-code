import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);

    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = cartCtx.items.map(item =>
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
    )

    return (
        <Modal onCloseModal={props.onCloseModal}>

            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCloseModal} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;