const url = "https://hoxton-backend.vercel.app/api/menus";

 const traerMenusPag = async (registro = 0) => {
  const response = await fetch(`${url}?desde=${registro}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  return data;
};
export default traerMenusPag
