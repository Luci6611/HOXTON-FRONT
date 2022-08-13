import React from 'react'
import '../styles/carousel-cards.css'
import foto1 from '../assets/choripan.jpg'
import Carrousel from 'react-bootstrap/Carousel';



const CarouselCards = () => {

  return (
    <>
    <Carrousel>
    <h1 className='text-light text-center'>ofertas</h1>
    <Carrousel.Item>
      <div className="cards-wrapper">
      <div className="card ">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5>
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
      <div className="card  d-md-block">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5>
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
      <div className="card  d-md-block">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5> 
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
      <div className="card  d-md-block">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5> 
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
    </div>
    </Carrousel.Item>
    <Carrousel.Item>
      <div className="cards-wrapper">
        <div className="card">
          <img src={foto1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5>
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card d-md-block">
          <img src={foto1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="card-title">500</h5>
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card  d-md-block">
          <img src={foto1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5>           
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card  d-md-block">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5> 
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
      </div>
      </Carrousel.Item>
    
    <Carrousel.Item>
      <div className="cards-wrapper">
        <div className="card">
          <img src={foto1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="card-title">500</h5>
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card  d-md-block">
          <img src={foto1}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="card-title">500</h5>
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card  d-md-block">
          <img src={foto1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="card-title">500</h5>
        
            <a href="#" className="btn btn-danger">añadir al carrito</a>
          </div>
        </div>
        <div className="card  d-md-block">
        <img src={foto1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h5 className="card-title">500</h5> 
          <a href="#" className="btn btn-danger">añadir al carrito</a>
        </div>
      </div>
      </div>
      </Carrousel.Item>
  </Carrousel>
  </>
  )
}

export default CarouselCards