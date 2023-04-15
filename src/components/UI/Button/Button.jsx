import React from 'react'

const AButton = (props) => {
  return (
    <button disabled={props.disabled} className={`border-2 w-[19rem] p-2 py-4 ${props.background}  ${props.hoverBackground} hover:text-black disabled:cursor-not-allowed`} onClick={props.onClick} >{props.children}</button>
  )
}

export default AButton


