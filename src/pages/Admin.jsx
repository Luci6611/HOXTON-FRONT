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
   
    // console.log(data)
    }
    const actualizarMenus = async (e) => {
      const menPut = e.target.id;
      const token = JSON.parse(localStorage.getItem("token"));

    
        const responsePut = await axios.put(`https://hoxton-backend.herokuapp.com/api/menus/${menPut}`,{
         headers:{"Authorization":` ${token} `}
        });
     console.log(responsePut);
        location.reload(true);
      

        
        console.log(e.target.id)      
                
    }
    // funcion para inactivar menus
    const menusDelete  = async (e) => {

      const menDelete = e.target.id;
      const token = JSON.parse(localStorage.getItem("token"));

    
        const response = await axios.delete(`https://hoxton-backend.herokuapp.com/api/menus/${menDelete}`,{
         headers:{"Authorization":` ${token} `}
        });

        location.reload(true);
      

        
        console.log(e.target.id)      
                
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
        
               <tr key={producto._id}>
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
                    <th><button onClick={actualizarMenus}  id={producto._id} className='bg-primary'>actualizar</button>
                    <button  id={producto._id} onClick={menusDelete}>eliminar</button></th>
                    </tr>
                    
                ))}   
       
        
        
        </tbody>
    </Table></>
  )
    }

export default Administradorgit 