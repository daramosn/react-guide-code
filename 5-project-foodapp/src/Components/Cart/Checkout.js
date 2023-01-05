import React, { useReducer } from 'react';

import classes from './Checkout.module.scss';

const defaultFormState = {
    name: '',
    street: '',
    postal: '',
    city: '',
}

const formReducer = (state, action) => {
    const currentValues = {
        name: state.name,
        street: state.street,
        postal: state.postal,
        city: state.city,
    }

    if (action.type === 'NAME') {
        return { ...currentValues, name: action.value }
    }
    if (action.type === 'STREET') {
        return { ...currentValues, street: action.value }
    }
    if (action.type === 'POSTAL') {
        return { ...currentValues, postal: action.value }
    }
    if (action.type === 'CITY') {
        return { ...currentValues, city: action.value }
    }
    if (action.type === 'reset') {
        return { ...defaultFormState }
    }
};

const Checkout = (props) => {
    const [formState, dispatchFormAction] = useReducer(formReducer, defaultFormState);

    const changeNameHandler = (event) => {
        dispatchFormAction({ type: 'NAME', value: event.target.value });
    };
    const changeStreetHandler = (event) => {
        dispatchFormAction({ type: 'STREET', value: event.target.value });
    };
    const changePostalHandler = (event) => {
        dispatchFormAction({ type: 'POSTAL', value: event.target.value });
    };
    const changeCityHandler = (event) => {
        dispatchFormAction({ type: 'CITY', value: event.target.value });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        props.onConfirm(formState);
        dispatchFormAction({ type: 'reset' });
        props.onCancel();
    };


    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={changeNameHandler} value={formState.name} />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" onChange={changeStreetHandler} value={formState.street} />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" onChange={changePostalHandler} value={formState.postal} />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" onChange={changeCityHandler} value={formState.city} />
            </div>

            <div className={classes.actions}>
                <button onClick={props.onCancel} type='button'>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;