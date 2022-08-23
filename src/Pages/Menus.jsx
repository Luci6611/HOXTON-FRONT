import React, { useEffect, useState } from "react";
import  traerMenusPag  from "../helpers/fetchMenuspag";
import BtnPagination from "../componets/BtnPagination";
import CarouselCards from "../componets/CarouselCards";

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const [total, setTotal] = useState(0);

  const [registro, setRegistro] = useState(0);

  useEffect(() => {
    cargarMenus();
  }, [registro]);

  const cargarMenus = async () => {
    const { menus, total } = await traerMenusPag(registro);
    console.log(menus);
    setMenus(menus);
    setTotal(total);
  };

  const nextPag = () => {
    //total 7
    //registro 0
    // 7
    // total 7
    //registro 5
    //2
    if (total - registro >= 5) {
      setRegistro(registro + 5);
    }
  };

  const prevPag = () => {
    if (registro !== 0) {
      setRegistro(registro - 5);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h1>Rolling Café</h1>
          <hr />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2">
        {menus.map((menus) => (
         <CarouselCards/> 
        ))}
      </div>
      <div className="row">
        <div className="col">
          <BtnPagination
            registro={registro}
            total={total}
            prevPag={prevPag}
            nextPag={nextPag}
          />
        </div>
      </div>
    </div>
  );
};

export default Menus;
