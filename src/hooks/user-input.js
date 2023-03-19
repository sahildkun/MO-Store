import React from 'react'

const useInput = (validateValue) => {
    const [inputValue , setInputValue] = useState('');
    const [isTouched , setIsTouched] = useState(false);

    const valueisValid = validateValue(inputValue)
    const hasError= !valueisValid && isTouched;
    
    const valueChangeHandler =(event) => {
        setInputValue(event.target.value);
    }
    const inputBlurhandler = (event) => {
   
        setIsTouched(true);
    }
    return {
        value: inputValue,
        hasError,
        valueChangeHandler,
        inputBlurhandler,
    }
}

export default useInput