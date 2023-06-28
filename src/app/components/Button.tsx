import React from 'react'

const Button = ({body}:any) => {
  return (
    <div className="px-4 py-2 bg-gray-900 max-w-fit text-white flex items-center rounded-sm font-bold cursor-pointer" >{body}</div>
  )
}

export default Button