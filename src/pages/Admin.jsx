import React from 'react'
import '../styles/style.css'
import '../styles/admin.css'
import Table from 'react-bootstrap/Table';
import { useState , useEffect} from 'react';
import {cargarUsuarios} from '../helpers/fetchUsuariosGET'
import 'axios'

const Admin = () => {

    const [usuarios, setUsuarios]=useState([]);

   const usuariosRender = async () =>{
     const usuariosRecibidos = await cargarUsuarios();
     setUsuarios(...usuariosRecibidos)
   }

    useEffect(() => {
      usuariosRender()
    }, [])
    
  return (
    <>
     <Table className='striped bordered hover' variant="dark">
      <thead> 
     <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody> 
         {usuarios.map( (usuario) => (
        <tr>
          <td>{usuario.id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.correo}</td>
        </tr> ))} 
      </tbody>
    </Table>
      </>
  )
}

export default Admin