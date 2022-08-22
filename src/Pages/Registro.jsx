import {React,useState} from 'react'
import "../styles/Registro.css" 
import favicon from "../assets/favicon_(1).ico";
import { Link, useNavigate } from "react-router-dom";
import { crearUsuario } from "../helpers/fetchUsuarios";

const  Registro = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "USER_ROLE",
  });
    
  const [message, setMessage] = useState([]);

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();

    const respuesta = await crearUsuario(formValues);

    if (respuesta?.usuario) {
      setMessage([{ ok: true, msg: respuesta.msg }]);
      setTimeout(() => {
        setMessage([]);
      }, 3000);
    } else {
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ msg: respuesta.msg }]);
      }
    }
    setFormValues({
      nombre: "",
      email: "",
      password: "",
      role: "USER_ROLE",
    });

  
  
    return (
     <> <Helmet>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    
      <title>Registro</title>
    </Helmet>
    <div className="signupFrm">
        <form action="" onSubmit={guardarDatos} className="formRegistro">
          <h1 className="title">Formulario de Registro</h1>
    
          <div className="inputContainer">
            <input type="email"  onChange={handleChange} 
            name="email"
            value={formValues.email}
            className="input" placeholder="ejemplo@ejemplo.com" required/>
            <label className="label">Email</label>
          </div>
    
          <div className="inputContainer">
            <input type="text" className="input"  onChange={handleChange} 
             name="nombre"
             value={formValues.nombre}
            placeholder="Nombre&Apellido" maxLength="12" minLength="4" required/>
            <label className="label">Usuario</label>
          </div>
    
          <div className="inputContainer">
            <input type="password"  className="input"  name="password"
           value={formValues.password}
            onChange={handleChange}minLength='4' placeholder="Contraseña" required/>
            <label className="label">Contraseña</label>
            
          </div>
    
          <input type="submit" className="submitBtn" value="Registrarse!"/>
        </form>
        {message.length > 0 &&
                message.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item?.ok ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {item.msg}
                  </div>
                ))}
      </div></>
  )
}
}
export default Registro;