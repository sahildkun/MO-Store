import React from 'react'
import classes from './Button.module.css'
import classNames from 'classnames'
const AButton = (props) => {
  return (
    <button className={`border-2 w-[19rem] p-2 py-4 ${props.background}  ${props.hoverBackground} hover:text-black`}>{props.children}</button>
  )
}

export default AButton


// `border-2 w-[20rem] p-2 py-4 bg-[${props.background}]