import React from 'react'
import "../styles/admin.css"
import { Link } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className='container nav-admin__cont'>
        <ul  className=' nav-admin__ul'>
         <li className=" nav-admin__li"> <a className=" nav-admin__a" href="#menus">menus</a></li>
          <li className=" nav-admin__li"><a className=" nav-admin__a" href="#usuarios">usuarios</a></li>
          <li className=" nav-admin__li"><a className=" nav-admin__a" href="#usuarios">pedidos</a></li>
         
        </ul>
    </div>
  )
}

export default NavAdmin