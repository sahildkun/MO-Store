import React from 'react'

const AButton = (props) => {
  return (
    <button className={`border-2 w-[19rem] p-2 py-4 ${props.background}  ${props.hoverBackground} hover:text-black`} onClick={props.onClick} >{props.children}</button>
  )
}

export default AButton


