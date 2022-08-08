import Carrousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/picada_3 (1).png'
import imagen2 from '../assets/lamb-steak-pieces-with-sauces-grilled-pepper-fresh-salad-on-wooden-board (1).jpg'
import imagen3 from '../assets/pizza-napolitana-sin-gluten.jpg'
import Cardsportada from './CardsPortada';


function Carousel() {
  return (
  <>
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
    <Cardsportada/>
    </div> 
   
    </>
  );
}

export default Carousel;