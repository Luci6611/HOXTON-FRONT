const url = "https://hoxton-backend.herokuapp.com/api/categorias";

 const traerCategorias = async () => {
  const response = await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  return data;
  
};
export default traerCategorias