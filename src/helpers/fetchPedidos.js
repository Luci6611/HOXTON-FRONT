const url = "https://hoxton-backend.herokuapp.com/api/pedidos";

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
export default traerPedidos
