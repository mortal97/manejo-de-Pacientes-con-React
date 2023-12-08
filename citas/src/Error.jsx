import React from 'react'


const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center font-bold p-3 uppercase m-3'><p>{children}</p></div>
  )
}

export default Error
