import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { crearUsuario } from "../helpers/fetchUsuarios";
import "../styles/Registro.css"

const Registro = () => {
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

    // console.log(respuesta);
  };

  return (
    <div className="contenedor">
    <div className="container  ">
      <div className="row login-cuerpo">
        <div className="col-12 col-sm-12 col-md-12 offset-md-3   columna-contenedor">
          <div className="card card-cont">
            <div className="card-body formRegistro  ">
              <h3  className="text-center mb-3 title">
                <i  className="fa fa-user-plus me-2" aria-hidden="true"></i>
                Registro de usuario
              </h3>
              <form  onSubmit={guardarDatos}>
                <input
                  className="form-control mb-2 input"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="off"
                />
                <input
                  className="form-control mb-2 input"
                  type="email"
                  placeholder="Ingrese su email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <input
                  className="form-control input"
                  type="password"
                  placeholder="*****"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />

                <div className="d-flex justify-content-end my-3">
                  <Link className="btn btn-outline-secondary me-2 submitBtn" to="/login">
                    Volver
                  </Link>

                  <button className="btn btn-success submitBtn">Registrarse</button>
                </div>
              </form>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
