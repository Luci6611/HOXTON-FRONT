import Carrousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/picada_3 (1).png'
import imagen2 from '../assets/lamb-steak-pieces-with-sauces-grilled-pepper-fresh-salad-on-wooden-board (1).jpg'
import imagen3 from '../assets/pizza-napolitana-sin-gluten.jpg'
import Cardsportada from './CardsPortada';
import '../styles/style.css'


function Carousel() {
  return (
  <>
    <div className='carousel-container'> 
    <Carrousel className='col-xl-9 col-lg-7  '>
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
    <Cardsportada className='col-xl-4 col-lg-3'/>
    </div> 
   
    </>
  );
}

export default Carousel;