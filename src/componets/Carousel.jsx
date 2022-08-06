import Carrousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/pizza-napolitana-receta-1024x674.webp'
import imagen2 from '../assets/colocar_alimentos_en_la_parrilla.jpg'
import imagen3 from '../assets/pizza-napolitana-sin-gluten.jpg'


function Carousel() {
  return (
    <div className='carousel-container'> 
    <Carrousel >
      <Carrousel.Item>
        <img  className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
      </Carrousel.Item>
      <Carrousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
      </Carrousel.Item>
      <Carrousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
      </Carrousel.Item>
    </Carrousel>
    </div>
  );
}

export default Carousel;