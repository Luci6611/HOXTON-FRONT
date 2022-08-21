import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../helpers/fetchAuth";


const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const datos = await login({ email, password });
    const datos = await login({ email, password });

    if (datos?.token) {
      localStorage.setItem("token", JSON.stringify(datos.token));
      console.log(datos.token);
      navigate("/");
    } else {
      if (datos?.errors) {
        setMessage(datos.errors);
      } else {
        setMessage([{ msg: datos.msg }]);
      }
    }
  };

  return (
  
    <div className="container">
      <div className="row login-cuerpo">
        <div className="col-12 col-md-12 col-sm-12   offset-md-4 ">
          <div className="card    ">
            <div className="card-body bg-black">
              <h3 className="text-center mb-4 text-danger">
                <i className="fa fa-user-circle-o me-2" aria-hidden="true"></i>
                Inicio de sesión
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus={true}
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="ingrese constraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex justify-content-center my-3">
                  <button className="btn btn-black btn-outline-danger mt-auto">Iniciar</button>
                </div>
                <div className="mb-3 text-center text-muted">
                  <small>
                    Si no tenés cuenta podés registrarte
                    <Link to="/signup"> aquí</Link>
                  </small>
                </div>
              </form>
              {message.length > 0 &&
                message.map((item, index) => (
                  <div key={index} className="alert alert-danger" role="alert">
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

export default LoginScreen;