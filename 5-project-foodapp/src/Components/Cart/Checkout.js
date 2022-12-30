import React from 'react';

import classes from './Checkout.module.scss';

const Checkout = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>

            <div className={classes.actions}>
                <button onClick={props.onCancel} type='button'>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;