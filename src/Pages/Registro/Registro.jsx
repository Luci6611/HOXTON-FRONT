import {React,useState} from 'react'
import './styles.css' 

export const Registro = () => {
    const [user,setUser] = useState({
        email:"",
        usuario:"",
        contraseña:""
    })
    

    async function handlerOnSubmit(e){
        e.preventDefault();
        
        // try {
        //   let result = await fetch("PASARME EL ENDPOINT", {
        //     method: "post",
        //     //mode: "no-cors",
        //     headers: {
        //       accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        //   });
    
        //   let response = await result.json();
        
        //   if (response.isError === true) {

        //   }
        //   else{
        //     logIn(data);
        //  }
            
          
        // } catch (error) {
        //     console.log(error);
        //   return error;
        // }
      };

    function handleMailChange(e){
        setUser({...user, email: e.target.value})
    }
    
    function handleUserChange(e){
        setUser({...user, usuario: e.target.value})
    }
    function handlePasswordChange(e){
        setUser({...user, contraseña: e.target.value})
    }
   
  
  
    return (
    <div className="signupFrm">
        <form action="" onSubmit={handlerOnSubmit} className="formRegistro">
          <h1 className="title">Formulario de Registro</h1>
    
          <div className="inputContainer">
            <input type="email"  onChange={handleMailChange} className="input" placeholder="ejemplo@ejemplo.com" required/>
            <label className="label">Email</label>
          </div>
    
          <div className="inputContainer">
            <input type="text" className="input"  onChange={handleUserChange} placeholder="Nombre&Apellido" maxLength="12" minLength="4" required/>
            <label className="label">Usuario</label>
          </div>
    
          <div className="inputContainer">
            <input type="password"  className="input" onChange={handlePasswordChange} minLength='4' placeholder="Contraseña" required/>
            <label className="label">Contraseña</label>
            
          </div>
    
          <input type="submit" className="submitBtn" value="Registrarse!"/>
        </form>
      </div>
  )
}

