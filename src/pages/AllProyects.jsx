import CardPorfolio from "../components/CardPorfolio"
import Navbar from "../components/Navbar"
import TitleCards from "../components/TitleCards"
import Transitions from "../components/Transitions"


const AllProyects = () => {
    /*    CardPortfolio { nameProyect, descriptionProyect, urlImageProyect, urlgithub, urlWebProyect }
      */

    return (
        <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-400">
            <Navbar />
            <Transitions>

                <TitleCards titleCards="Primer proyecto" />

                <CardPorfolio urlgithub="https://github.com/raquecre/raSabana"
                    nameProyect="La Sabana"
                    descriptionProyect="Proyecto para familiarizarse con amiliarizarse con puro html y CSS"
                    urlImageProyect={"https://i.imgur.com/FfCV8cQ.png"}
                    urlgithub="https://github.com/raquecre/raSabana" />



            </Transitions>
            <div div className="max-w-3xl bg-white bg-opacity-70 shadow-lg rounded-lg flex flex-col justify-between m-3" >

            </div>
        </div >
    )
}


export default AllProyects


