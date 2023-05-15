const url = "https://hoxton-backend-65poh53y6-luci6611.vercel.app/api/pedidos";



 const traerPedidos = async (registro = 0) => {
  const response = await fetch(`${url}?desde=${registro}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": JSON.parse(localStorage.getItem("token"))
    },
  });
  const data = await response.json();

  return data;
};

export const crearPedido = async ( _id) => {

  const response = await fetch(
    `${url}`,
    {
      method: "POST",
      body: JSON.stringify({
        menu:_id,

      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }
  ).then((response) => response.json());
    
};
export default traerPedidos
