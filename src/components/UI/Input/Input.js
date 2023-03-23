import React from 'react'

const Input = ({
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
}) => {
  return (
      <div className="inputContainer">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  )
}

export default Input