/* eslint-disable react/prop-types */
import React from 'react'

const PacientesL = ({paciente,SetPaciente}) => {
  
  return (
    
    <div className='m-3 bg-white shadow-md px-5 py-10  rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: 
    <span className='font-normal normal-case'> {paciente.nombre} </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:
    <span className='font-normal normal-case'> {paciente.nombreP}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
    <span className='font-normal normal-case'> {paciente.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:
    <span className='font-normal normal-case'> {paciente.fecha}  </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:
    <span className='font-normal normal-case'> {paciente  .mensaje}</span>
    </p>
    <div className='flex justify-between'>
    <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold  uppercase rounded-lg'onClick={()=>SetPaciente(paciente)}>Editar</button>
    <button className='py-2 px-10  bg-red-600 hover:bg-red-700 mx-2 text-white font-bold  uppercase rounded-lg'>eliminar</button>
    

  </div>
  </div>


  )
}

export default PacientesL
