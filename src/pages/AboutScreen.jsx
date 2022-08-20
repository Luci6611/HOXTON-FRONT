import React from 'react'
import {Helmet} from "react-helmet";
import favicon from '../assets/favicon_(1).ico'
import '../styles/aboutScreen.css'
import nico from '../assets/NicoMorales.jpeg'
import carlos from '../assets/carlos.jpeg'
import roman from '../assets/Roman.jpeg'
import sol from '../assets/sol.jpeg'
import luciano from '../assets/luciano.jpeg'
import logo from '../assets/hoxton_logo_recortado.png'
import cocinero from '../assets/cocinero2.webp'


const AboutScreen = () => {
  return (
    <>
    <Helmet>  
        <title>Nosotros</title> 
        <link rel="shortcut icon" href={favicon} />
    </Helmet>
     <main>
        <section>
        <h1>Sobre Nosotros!</h1>
        <p>Hoxton nace de una reunion de amigos, con la intension de pasar buenos momentos, primero fue una idea, rapidamente esa idea tomo fuerza y hoy son el corazon de nuestro proyecto. Somos un lugar de encuentro, un lugar para disfrutar de excelente comida y bebidas, conocer gente, construir historias...Tu bar. </p><p><img src={logo} alt="logotipo" /> 
        <h2>Nuestra propuesta</h2></p>

        <p>En todas nuestras recetas, nos enfocamos en buscar sabores nuevos, nos basamos en preparaciones simples, pero a la vez ricas, aplicando tecnicas novedosas y difierentes ingredientes. Disfrutamos utilizando insumos e ingredientes regionales, de pequeños productores locales que buscamos y encontramos alrededor de todo el pais. Amamos lo que hacemos y nos apasiona mostrarlo en cada una de nuestras recetas! </p>
        <hr/>
        <br/>
        <br/>
            <h2>Nuestra cocina...</h2> 
        <img src={cocinero} alt="cocina"/>
        <p>Somos un proyecto vivo que fluye en distintos sentidos, reinventándonos a paso firme. Nuestra propuesta gastronómica sorprende con un menú compuesto de platos sencillos, combinando sabores, texturas y contrastes, convirtiendo productos de alta calidad en deliciosos platos. </p>  
                <article className="nosotrosFotos">
                    <div className="container">
                        <h2> Nuestro Equipo </h2>
                        <div className="lasFotos">
                        <div className="carta">
                            <img className="foto" src={luciano} alt="Luciano"/>
                            <h3>Luciano Rivera</h3>
                        </div>
                        <div className="carta">
                            <img className="foto" src={nico} alt="Nico"/>
                            <h3>Nicolas Morales</h3>
                        </div>
                        <div className="carta">
                            <img className="foto" src={roman} alt="Roman"/>
                            <h3>Roman Alvarez</h3>
                        </div>
                        <div className="carta">
                            <img className="foto" src={sol} alt="Sol"/>
                            <h3>Sol Dahud</h3>
                        </div>
                        <div className="carta">
                            <img className="foto" src={carlos} alt="Carlos"/>
                            <h3>Carlos Molina</h3>
                        </div>
                    </div>
                    </div>             
                </article>
               </section>
       </main>
    </>
  )
}

export default AboutScreen