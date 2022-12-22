import React from 'react';
import mealPhoto from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Food app</h1>
                <HeaderCartButton onOpenModal={props.onOpenModal} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealPhoto} alt="food_photo" />
            </div>
        </React.Fragment>
    );
};

export default Header;