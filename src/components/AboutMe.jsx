import ButtonLink from "./ButtonLink";
import Navbar from "./Navbar";
import ProfileImg from "./ProfileImg";
import SocialNetworks from "./SocialNetworks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutMe = () => {


    return (
        <div className="max-w-3xl bg-white bg-opacity-70 shadow-lg rounded" >
               <Navbar/>
            <div className="flex ml-5  justify-between">
             
                <div className="flex flex-col justify-center ">
                    <h1 className=" text-sm pt-5">Hola, soy Raquel</h1>
                    <h3 className="font-semibold text-4xl hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400  ">Front-end Developer</h3>
                    <p className="text-xs text-gray-600 mt-4" >Hacer accesible el mundo tecnológico es lo que me motiva a seguir formándome.</p>
                </div>
                <div className="w-1/4">
                    <ProfileImg />
                </div>

            </div>
            <SocialNetworks/>

            <div className="flex gap-10 m-10">
                <ButtonLink directionlink="/MyCv" textshowLink= "Sobre mí"></ButtonLink>
                <ButtonLink directionlink="/" textshowLink="Mi Tabajo"></ButtonLink>
            </div>

        </div>
    )

}

export default AboutMe;