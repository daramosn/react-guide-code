import { useState } from 'react';

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState('');
    const [wasTouched, setWasTouched] = useState(false);

    const inputIsValid = validateValue(inputValue);
    const isError = !inputIsValid && wasTouched;

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const isTouchedHandler = () => {
        setWasTouched(true);
    };

    const resetValues = () => {
        setInputValue('')
        setWasTouched(false);
    };

    return {
        value: inputValue,
        inputIsValid: inputIsValid,
        isError: isError,
        inputChangeHandler: inputChangeHandler,
        isTouchedHandler: isTouchedHandler,
        reset: resetValues,
    }
};

export default useInput;