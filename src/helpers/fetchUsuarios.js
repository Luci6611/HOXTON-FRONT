const url = "https://hoxton-backend-65poh53y6-luci6611.vercel.app/api/usuarios";

export const crearUsuario = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
  
};

export const usuario = async () => {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: JSON.parse(localStorage.getItem("token")),
    },
  });

  const data = await resp.json();

  return data;
  
};