import React from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: name,
    inputIsValid: nameIsValid,
    isError: nameError,
    inputChangeHandler: nameChangeHandler,
    isTouchedHandler: nameIsTouchedHandler,
    reset: nameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: email,
    inputIsValid: emailIsValid,
    isError: emailError,
    inputChangeHandler: emailChangeHandler,
    isTouchedHandler: emailIsTouchedHandler,
    reset: emailReset,
  } = useInput(value => value.includes('@'));


  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      nameReset();
      emailReset();
    }
  };

  let styleForm = nameError ? 'form-control invalid' : 'form-control';
  let styleEmailForm = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler} >
      <div className={styleForm}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameIsTouchedHandler}
          type='text' id='name' />
      </div>
      {nameError && <p className='error-text'>Input must not be empty or less than 5 letters</p>}

      <div className={styleEmailForm}>
        <label htmlFor='email'>Your email</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailIsTouchedHandler}
          type='email' id='email' />
      </div>
      {emailError && <p className='error-text'>Email must have an @</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
