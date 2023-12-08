import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './Formulario'
import Pacientes from './Pacientes'
import PacientesL from './PacientesL'
import Error from './Error'

function App() {
  const [pacientes,SetPacientes]=useState([])
  const [paciente,SetPaciente]=useState({})
  

  return (
  <div className='container mx-auto  mt-20'>

    <Header/>
    <div className='mt-12 flex'>
    <Formulario 
    pacientes={pacientes} SetPacientes={SetPacientes}
    
    />
    <Pacientes pacientes={pacientes}
    SetPaciente={SetPaciente}/>
   

    </div>
   


  </div>
  )
}

export default App
