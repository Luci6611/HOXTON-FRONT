import axios from "axios";
import productos from "../Pages/Admin"


const admin = axios.create({
  baseURL: "https://hoxton-backend.herokuapp.com/api/",
});

/* Funcion eliminar */

export const eliminar = async (area, id) => {
  const response = await admin.delete(`${area}/${id}`, {
    headers: { Authorization: JSON.parse(localStorage.getItem("token"))
    
  },
  });
  location.reload(true);
};

/* Funcion Traer */

export const traer = async (area) => {
  const response = await admin.get(`/${area}`, {
    headers: { "Authorization": JSON.parse(localStorage.getItem("token")) },
  });

  return response;
};

/* Funcion Put */

export const actualizar = async (area,productoselecionadoid,productoselecionado ) => {
   /* 42656071 */
const response = await fetch(`https://hoxton-backend.herokuapp.com/api/${area}/62faad8f697b01919cfa4f75`, {
  method: 'PUT',
  body: JSON.stringify({
    productoselecionado
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    "Authorization": JSON.parse(localStorage.getItem("token"))
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))




  
  // .then(response=>{

  //   // productos.map(datos=>{
  //   //   if(productoselecionado.id===datos.id){
  //   //     datos.img=productoselecionado.img;
  //   //    datos.nombre=productoselecionado.nombre;
  //   //     datos.precio=productoselecionado.precio;
  //   //     datos.estado=productoselecionado.estado;
  //   //     datos.detalle=productoselecionado.detalle;
  //   //   }
  //   // })
  //   // setProductos(productos);
   
  // })


  // const response =  await admin.put(
  //   `/${area}/${productoselecionadoid}`+ productoselecionado,  {
  //     headers: { "Authorization": `Bearer ${ JSON.parse(localStorage.getItem("token"))}`    }},)

  // console.log(response.data, response.headers)
  // location.reload()
  return response;

}
