import axios from 'axios';

const token = JSON.parse(localStorage.getItem("token"));

 const admin = axios.create({
    baseURL:'https://hoxton-backend.herokuapp.com/api/'
});

/* Funcion eliminar */

export const eliminar = async (area, id) => {

    const response = await admin.delete(
      `${area}/${id}`,
      {
        headers: { Authorization: ` ${token} ` },
      }
      
    );
    };

    /* Funcion Traer */

    export const traer = async (area) => {

        const response = await admin.get(
          `/${area}`,
          {
            headers: { Authorization: ` ${token} ` },
          }
        );

        return response;
    
        };
