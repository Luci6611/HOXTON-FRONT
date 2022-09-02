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

export const actualizar = async (area, imagen, nombre, precio, estado,detalle, id) => {
   

  const response =  await admin.put(
    `/${area}/${id}`,   {
      headers: {  "Authorization": JSON.parse(localStorage.getItem("token"))},
      data:{'nombre':nombre,'precio':precio,'detalle':detalle,'estado':estado, 'img':imagen}
    });

  console.log(response.data, response.headers)
};
