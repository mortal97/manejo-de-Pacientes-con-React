/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import PacientesL from './PacientesL'

const Pacientes = ({pacientes,SetPaciente}) => {
  return (
    
    <div className=' md:h-screen w-1/2'>
      {pacientes && pacientes.length? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center '>
  
            Administra tus{""} 
            <span className='text-indigo-600 font-bold text-xl'> Pacientes y citas</span>
          </p>
          {pacientes.map((paciente)=>(
            <PacientesL
            key={paciente.id}
            paciente={paciente}
            SetPaciente={SetPaciente}
            
            />
          ))}
           </>


      ): (
        
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center '>
  
            Comienza agregando Pacientes{""} 
            <span className='text-indigo-600 font-bold text-xl'> y apareceran en este lugar</span>
          </p>
        
        
        
        </>
      )} 
      
      
       
       
       
      
      
      
    </div>
  )
}

export default Pacientes
