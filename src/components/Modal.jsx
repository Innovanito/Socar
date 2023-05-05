import React from 'react'
import vehiclesData from './vehiclesData'

const Modal = ({onClose}) => {
  
  return (
    <div className="max-w-md fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <div className="bg-white p-2 w-96">
        <div className=' flex flex-row space-x-80 '>
          <div>
            {/* blank */}
          </div>
          <button
            className="font-semibold text-end text-xl text-gray-700"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h1 className=' text-center text-2xl'> 차량정보 </h1>
      </div>
    </div>
  )
}

export default Modal