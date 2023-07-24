import ButtonLink from "./ButtonLink"
import CardPorfolio from "./CardPorfolio"
import TitleCards from "./TitleCards"

const MiniPorfolio = () => {


    return (
        <div className="flex flex-col justify-center items-start ml-10">
            <div className="flex flex-col justify-start items-start">
                <TitleCards titleCards="Portfolio" />
            </div>

            <CardPorfolio
                nameProyect=" Café de altura"
                urlProyect="https://raquecre-cafealtura.netlify.app/"
                descriptionProyect="Proyecto de comercio electrónico realizado con React.
         Los datos se extraían de una Api creada por nosotros mismos."
                urlImageProyect={"https://i.imgur.com/3NmfrZK.png"}
                urlgithub="https://github.com/raquecre/React-Cafe-Altura" />

            <CardPorfolio nameProyect="Lista de países"

                descriptionProyect="a través de la API donde se almacenan los 250 países,
                mi objetivo ha sido sacar la información de todos ellos para crear una 'barra de navegación,
                y, al hacer click sobre uno de los países, te mostrara información básica sobre ellos'"
                urlImageProyect="https://i.imgur.com/vjTwf7p.png"
                urlgithub="https://github.com/raquecre/react-countries" />

            <ButtonLink directionlink='/AllProyects' textshowLink='Seguir viendo' />

        </div>
    )
}

export default MiniPorfolio