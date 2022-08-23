import {React,useState} from 'react'
import { Helmet } from 'react-helmet';
import "../styles/FormularioContacto.css" 
import favicon from "../assets/favicon_(1).ico";

 const FormularioContacto = () => {
  const [form,setForm] = useState({
    nombre:"",
    mail:"",
    asunto:"",
    descipcion:""
  })

  async function handlerOnSubmit(e){
    e.preventDefault();
    
    console.log(form)
    // try {
    //   let result = await fetch("PASARME EL ENDPOINT", {
    //     method: "post",
    //     //mode: "no-cors",
    //     headers: {
    //       accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });

    //   let response = await result.json();
    
    //   if (response.isError === true) {

    //   }
    //   else{
    //     
    //  }
        
      
    // } catch (error) {
    //     console.log(error);
    //   return error;
    // }
  };

  function handlerNameOnChange(e){
    setForm({...form, nombre: e.target.value})
    
  }
  function handlerMailOnChange(e){
    setForm({...form, mail: e.target.value})
    
  }

  function handlerIssueOnChange(e){
    setForm({...form, asunto: e.target.value})
    
  }

  function handlerIssueTextOnChange(e){
    setForm({...form, descipcion: e.target.value})
    
  }

    return(
      <> <Helmet>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    
      <title>Registro</title>
    </Helmet>
        <div> 
        <h2> Formulario de contacto</h2>
        <form action="" onSubmit={handlerOnSubmit} className="FormFormulario">
        
        <input className='inputContact' type="text" onChange={handlerNameOnChange} placeholder="Nombre" required/>
        <input className='inputContact' type="email" onChange={handlerMailOnChange} placeholder="E-Mail" required/>
        <input className='inputContact' type="text" onChange={handlerIssueOnChange} placeholder="Asunto" required/>

        <textarea className='inputContact' onChange={handlerIssueTextOnChange} placeholder="Por favor, escriba su mensaje" required/>
        <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Enviar mensaje!</span>
          </button>
            
     </form>
     </div></>
    )
}
export default FormularioContacto;