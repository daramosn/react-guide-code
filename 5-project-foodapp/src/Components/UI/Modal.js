import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

import classes from './Modal.module.css';

const ModalOverlay = (props) => {
    return (
        <React.Fragment>
            <div onClick={props.onCloseModal} className={classes.backdrop}></div>
            <Card className={classes.modal}>
                {props.children}
            </Card>
        </React.Fragment>)
}

const portalElement = document.querySelector('#modal-root');

const Modal = (props) => {
    return (

        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay onCloseModal={props.onCloseModal}>
                    {props.children}
                </ModalOverlay>,
                portalElement
            )}
        </React.Fragment >
    );
};

export default Modal;