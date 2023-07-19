import CardPorfolio from "../components/CardPorfolio";
import Footer from "../components/Footer";
import MyTech from "../components/MyTech";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Transitions from "../components/Transitions";

const MyCV = () => {

    /* urlImageProyect="" */
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 flex flex-col items-center align-center items-center ">
            <div className="flex flex-col items-center align-center items-center" >
                <Navbar />
                <Transitions>
                    <TitleCards titleCards="Sobre mí" />
                    <CardPorfolio nameProyect="Raquel "
                        descriptionProyect="Hacer accesible el mundo tecnológico  es lo que me motiva a seguir formándome."
                        urlgithub="https://github.com/raquecre/"
                        urlWebProyect="https://www.linkedin.com/in/raquecre/" />

                    <TitleCards titleCards="Tecnologías" />
                    <MyTech />
                </Transitions>
            </div>
            <Footer/>
        </div>
    )
}

export default MyCV;