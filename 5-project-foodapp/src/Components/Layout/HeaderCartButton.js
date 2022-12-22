import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [bumping, setBumping] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    let bumpClasses = `${classes.button} ${bumping && classes.bump}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBumping(true);

        const timer = setTimeout(() => {
            setBumping(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <button onClick={props.onOpenModal} className={bumpClasses}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;