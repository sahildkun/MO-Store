import React from 'react'

const CategoryButton = (props) => {

    if(props.children  === 'mobile') {
        
        return <button className=' absolute top-2 left-2 bg-green-400 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{props.children.toUpperCase()}</button>
    }
    if(props.children === 'laptop' ) {
      return <button className='absolute top-2 left-2 bg-purple-500 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{props.children.toUpperCase()}</button>

    }
    if(props.children === 'watch' ) {
      return <button className='absolute top-2 left-2 bg-orange-500 w-[5rem] text-center font-bold py-1 rounded-sm' id='company'>{props.children.toUpperCase()}</button>

    }
  return (
 
    <button className='absolute top-2 left-2 bg-red-400 w-[6rem] text-center font-bold py-1 rounded-sm' id='company'>{props.children.toUpperCase()}</button>
  )
}

export default CategoryButton