import { useState, useCallback } from 'react';

function useForm(formObj) {
  const [form, setForm] = useState(formObj);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const onInputChange = useCallback((event) => {
    // not yet implemented
  }, []);

  return { renderFormInputs };
}

export default useForm;