import axios from "axios";



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

  const response =  await admin.put(
    `/${area}/${productoselecionadoid}`+productoselecionadoid, productoselecionado,  {
      headers: {  Authorization: JSON.parse(localStorage.getItem("token"))}    });

  console.log(response.data, response.headers)
  return response;

};
