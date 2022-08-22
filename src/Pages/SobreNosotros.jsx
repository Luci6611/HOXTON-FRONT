import {React} from "react"; 
import "../styles/SobreNosotros.css"
import logoH from "../img/hoxton_logo.jpg"
import cocineroDos from "../img/cocinero2.webp"
import luciano from "../img/Luciano.jpeg"
import nicolas from "../img/NicoMorales.jpeg"
import roman  from '../img/Roman.jpeg'
import sol from "../img/Sol.jpeg"
import carlos from "../img/carlos.jpeg"
import { Helmet } from "react-helmet";
import favicon from "../assets/favicon_(1).ico";



 const SobreNosotros = () => {
    
    return(
        <> <Helmet>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    
      <title>Nosotros</title>
    </Helmet>
    <section>
    <h1 className="h1AboutUs">Sobre Nosotros!</h1>
    <p>Hoxton nace de una reunion de amigos, con la intencion de pasar buenos momentos, primero fue una idea, rapidamente esa idea tomo fuerza y hoy son el corazon de nuestro proyecto. Somos un lugar de encuentro, un lugar para disfrutar de excelente comida y bebidas, conocer gente, construir historias...Tu bar. </p>
    <div>
        <img src={logoH} alt="logotipo" /> 
        <h2 className="h2AboutUs">Nuestra propuesta</h2>
    </div>

    <p>En todas nuestras recetas, nos enfocamos en buscar sabores nuevos, nos basamos en preparaciones simples, pero a la vez ricas, aplicando tecnicas novedosas y difierentes ingredientes. Disfrutamos utilizando insumos e ingredientes regionales, de pequeños productores locales que buscamos y encontramos alrededor de todo el pais. Amamos lo que hacemos y nos apasiona mostrarlo en cada una de nuestras recetas!</p>
    <hr/>
    <br/>
    <br/>
        <h2 className="h2AboutUs">Nuestra cocina...</h2> 
    <img src={cocineroDos} alt="cocina"/>
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
                        <img className="foto" src={nicolas} alt="Nico"/>
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
    </section></>
    )
}

export default SobreNosotros;