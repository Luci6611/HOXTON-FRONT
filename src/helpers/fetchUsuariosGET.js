const url = "https://hoxton-backend.herokuapp.com/api/usuarios";

export const cargarUsuarios = async () => {
  const resp = await fetch(url, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
  
};