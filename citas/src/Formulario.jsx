/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Error from './Error';

const Formulario = ({pacientes,SetPacientes}) => {

  const generarid=()=>{
    const random=Math.random().toString(36).substr(2);
    const fecha1=Date.now().toString(36)
    return random+fecha
  }
  const [nombre,SetNombre]=useState('');
  const [nombreP,SetNombreP]=useState('');
  const [email,setEmail]=useState('');
  const [mensaje,setMensaje]=useState('');
  const [fecha,Setfecha]=useState('')
  const[error,setError]=useState(false);

  const sintomas=(e)=>{
    let sintomas1=e.target.value
    setMensaje(sintomas1)
console.log(mensaje)
  }

  const date=(e)=>{

    let fecha1=e.target.value;
    Setfecha(fecha1);
    console.log(fecha)

  }

  const correo=(e)=>{
    let correo1=e.target.value
    setEmail(correo1)
    console.log(email)

  }


  const NombrePropietario=(e)=>{
    let nombreP1=e.target.value
    SetNombreP(nombreP1)
    console.log(nombreP)

  }


  const enviado=(e)=>{

    
    e.preventDefault();
    if([nombre,nombreP,email,mensaje,fecha].includes('')){
      
    setError(true);
      


      
    }else{
     setError(false)
     const objetoPaciente={
      nombre,
      nombreP,
      email,
      mensaje,
      fecha,
      id:generarid()
      
     }
     SetPacientes([...pacientes,objetoPaciente])
     setEmail('')
     setMensaje('')
     SetNombre('')
     SetNombreP('')
     Setfecha('')

    }
    console.log("se ha enviado")
  }

  const obteniendo=(e)=>{
    let nombre1=e.target.value;
SetNombre(nombre1)
console.log(nombre)

  }
  return (
    <div className='w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y{""}
        <span className='text-indigo-600 font-bold '>Administralos</span>

      </p>
      <form onSubmit={enviado}    className='bg-white shadow-md rounded-lg py-10  px-5'>
      {error&& <Error>

        <p>Todos los campos son obligatorios</p>
        </Error>}

        <label htmlFor='Nombre' className='block text-gray-700 uppercase font-bold'>Nombre de Mascota {nombre}</label>
        <input value={nombre} type="text" name="Nombre" id="Nombre" onChange={obteniendo} placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        <label htmlFor='NombreP' className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
        <input value={nombreP} onChange={NombrePropietario} type="text" name="NombreP" id="NombreP"  placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
        <input  value={email}onChange={correo} type="email" name="email" id="email"  placeholder='Email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>Fecha</label>
        <input value={fecha} onChange={date} type="date" name="date" id="date"  placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="Sintomas">Sintomas</label>
          <textarea value={mensaje} onChange={sintomas} className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' name="" id="Sintomas" cols="30" rows="10"></textarea>

        </div>
        <input className='bg-indigo-600 w-full p-3 text-wwhite uppercase font-bold hover:bg-indigo-700 text-white' type="submit" value="Agregar Paciente " />
      </form>
        
      
    </div>
  )
}

export default Formulario
