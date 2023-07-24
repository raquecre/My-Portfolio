import CardPorfolio from "../components/CardPorfolio"
import Navbar from "../components/Navbar"
import TitleCards from "../components/TitleCards"
import Transitions from "../components/Transitions"
import Footer from "../components/Footer"


const AllProyects = () => {
    /*    CardPortfolio { nameProyect, descriptionProyect, urlImageProyect, urlgithub, urlWebProyect }
      */

    return (
        <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-400">
            <div className="p-20 flex flex-col items-center">
                <Navbar />
                <Transitions>
                    {/* 
                    <TitleCards titleCards="En Construcción" />

                    <CardPorfolio
                        nameProyect=""
                        descriptionProyect=""
                        urlImageProyect={""}
                        urlgithub="" />
 */}
                    <TitleCards titleCards="Proyectos Terminados" />

                    <CardPorfolio nameProyect=" Café de altura"
                        urlProyect="https://raquecre-cafealtura.netlify.app"
                        descriptionProyect="Proyecto de comercio electrónico realizado con React. Se proporcionó un modelo en Figma.
                         Los datos de los productos están alojados en una Api creada por mí. 
                         Cada uno de las Card son un componente distinto. 
                         Dentro de los cafés seleccionados podemos tanto añadirlos como quitarlos."
                        urlImageProyect="https://i.imgur.com/3NmfrZK.png"
                        urlgithub="https://github.com/raquecre/React-Cafe-Altura" />

                    <CardPorfolio nameProyect="Pokedex"
                        urlProyect="https://pokecart-raquecre.netlify.app/"
                        urlgithub="https://github.com/raquecre/react-context-ex3-Pokeapi"
                        descriptionProyect="Proyecto realizado en React más boostrap para añadir todo el CSS.
                        Se trata de un listado de pokemon, en los cuales, puedes añadirlos a un 'pokecart', así como eliminarlos del mismo.
                        Es decir, sigue el protocolo de una página de comercio electrónico."
                        urlImageProyect="https://i.imgur.com/kBz7hrg.png" />

                    <CardPorfolio nameProyect="Lista de países"
                        urlProyect="https://countrieslist-raquecre.netlify.app/"
                        descriptionProyect="a través de la API donde se almacenan los 250 países,
                    mi objetivo ha sido sacar la información de todos ellos para crear una 'barra de navegación,
                    y, al hacer click sobre uno de los países, te mostrara información básica sobre ellos'"
                        urlImageProyect="https://i.imgur.com/vjTwf7p.png"
                        urlgithub="https://github.com/raquecre/react-countries" />

                    <CardPorfolio nameProyect="Proyecto Rutas"
                        urlProyect="https://miniexsreact.netlify.app/"
                        descriptionProyect=" Proyecto inicial para familiarizarse con el uso de react 
                    y las distintas formas de comunicación entre los componentes.
                    En cada página existe un ejercicio distinto donde aparecen distintas comunicaciones entre los componentes."
                        urlImageProyect="https://i.imgur.com/IEG4soE.png"
                        urlgithub="https://github.com/raquecre/all-mini-exs" />

                    <CardPorfolio nameProyect="Contactos"
                    urlProyect="https://contacts-raquecre.netlify.app/"
                    descriptionProyect="Gestión de datos personales almacenados en una API. Se trata de aprender a gestionar
                     cómo se pintas los datos en pantalla, y que estos sean mutables, siendo capaces de poder cambiar el orden de presentación, 
                     tanto por orden alfabético como por puntación de popularidad."
                     urlImageProyect="https://contacts-raquecre.netlify.app/"
                     urlgithub="https://github.com/raquecre/react-proyect2-contacts"
                    />

                    <Footer />

                </Transitions>
            </div>
            <div div className="max-w-3xl bg-white bg-opacity-70 shadow-lg rounded-lg flex flex-col justify-between m-3" >

            </div>
        </div >
    )
}


export default AllProyects


