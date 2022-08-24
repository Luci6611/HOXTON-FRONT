import React, { useEffect, useState } from 'react'
import {menusAdmin} from "../helpers/fetchMenusAdmin"
import "../styles/admin.css"
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Administrador = () => {
    
    const [productos,setProductos] = useState([])
   const recibirMenus = async ()=>{
        
    const datos = (await menusAdmin.get(`menus`)).data;
    const data = datos.menus;
    setProductos(data);
   
    console.log(data)
    }
    // const actualizarMenus =(_id) => {
    //     const res = await datos.put(`menu/${_id}`, {

    //         precio:productos.precio,

    //     });
    // }
    const menusDelete = async (id) => {

        const res = await datos.delete(`menu/${id}`)

           
                
    }
    useEffect(() => {
        recibirMenus()
    
     
    }, [])
    


  return (
  <>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Id</th>
        <th>img</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Activo</th>
      </tr>
    </thead>
    <tbody>

    {productos.map((producto) => (
        
               <tr>
                    <th className="intro-celda">{producto._id}</th>
                    <th>
                      <img
                        className="intro-img"
                        src={producto.img}
                       
                      />
                    </th>
                    <th className="intro-celda">{producto.nombre}</th>
                    <th className="intro-celda">{producto.precio}</th>
                    <th className="intro-celda">{producto.disponible ? 'disponible' : 'NO disponible'}</th>
                    <th><button className='bg-primary'>actualizar</button>
                    <button  id={producto._id} onClick={menusDelete(producto._id)}>eliminar</button></th>
                    </tr>
                    
                ))}   
       
        
        
        </tbody>
    </Table></>
  )
    }

export default Administrador