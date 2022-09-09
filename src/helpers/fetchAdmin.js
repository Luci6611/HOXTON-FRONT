import axios from "axios";

const admin = axios.create({
  baseURL: "https://hoxton-backend.herokuapp.com/api/",
});

/* Funcion eliminar */

export const eliminar = async (area, id) => {

  const response = await fetch(
    `https://hoxton-backend.herokuapp.com/api/${area}/${id}`,
    {
      method: "DELETE",
      headers:  {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));

  location.reload(true);
 
  return response;
};

/* Funcion Traer */

export const traer = async (area) => {
  const response = await admin.get(`/${area}`, {
    headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
  });

  return response;
};

/* Funciones Put */

/* Actualizar menus */

export const actualizar = async (area, productoselecionado) => {

  const response = await fetch(
    `https://hoxton-backend.herokuapp.com/api/${area}/${productoselecionado._id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        img: productoselecionado.img,
        nombre: productoselecionado.nombre,
        precio: productoselecionado.precio,
        detalle: productoselecionado.detalle,
        disponible: productoselecionado.disponible,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
    location.reload();
};

/* Actualizar pedido */

export const actualizarEstado = async (area, id,estadoMenu) => {

  const response = await fetch(
    `https://hoxton-backend.herokuapp.com/api/${area}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        entrega: estadoMenu,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
    location.reload();
  
};

/* Funciones POST */

  /* crear menus */

export const Crear = async (area, productoselecionado) => {

  const response = await fetch(
    `https://hoxton-backend.herokuapp.com/api/${area}`,
    {
      method: "POST",
      body: JSON.stringify({
        id: productoselecionado.id,
        img: productoselecionado.img,
        nombre: productoselecionado.nombre,
        precio: productoselecionado.precio,
        detalle: productoselecionado.detalle,
        disponible: productoselecionado.disponible,
        categoria: productoselecionado.categoria,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("menu dado de alta correctamente");
     location.reload();
};

 /* crear usuarios */

export const crearUsuarios = async (area, usuariosSelecionados) => {

  const response = await fetch(
    `https://hoxton-backend.herokuapp.com/api/${area}`,
    {
      method: "POST",
      body: JSON.stringify({
        nombre: usuariosSelecionados.nombre,
        role: usuariosSelecionados.role,
        email: usuariosSelecionados.email,
        password: usuariosSelecionados.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("usuario dado de alta correctamente");
   location.reload();
 
};
