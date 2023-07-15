import CardPorfolio from "../components/CardPorfolio";
import MyTech from "../components/MyTech";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";

const Contact = () => {

/* urlImageProyect="" */
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-400">
            <Navbar/>
            <TitleCards titleCards="Sobre mí"/>
            <CardPorfolio nameProyect="Raquel " descriptionProyect="Aquí va la descripción de linkedin" urlgithub="https://github.com/raquecre/" urlWebProyect="https://www.linkedin.com/in/raquecre/"/>
            <TitleCards titleCards="Tecnologías" />
            <MyTech/>
         
        </div>
    )
}

export default Contact;