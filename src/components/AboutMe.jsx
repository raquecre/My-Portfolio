import ButtonLink from "./ButtonLink";
import Navbar from "./Navbar";
import ProfileImg from "./ProfileImg";
import SocialNetworks from "./SocialNetworks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutMe = () => {


    return (
        <div className="max-w-5xl bg-white bg-opacity-90 shadow-lg rounded-2xl" >
               <Navbar/>
            <div className="flex   justify-around">
             
                <div className="flex flex-col justify-center ">
                    <h1 className=" text-sm pt-5">Hola, soy Raquel</h1>
                    <h3 className="font-semibold text-4xl hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400  ">Front-end Developer</h3>
                    <p className="text-xs text-gray-600 mt-4 " >Mi objetivo es conseguir una realidad con una <di className="hover:font-semibold"> accesibilidad universal </di> para todos.</p>
                </div>
                <div className="w-1/4">
                    <ProfileImg />
                </div>

            </div>
            <SocialNetworks/>

            <div className="flex gap-10 m-10">
                <ButtonLink directionlink="/Portfolio" textshowLink="Portfolio"></ButtonLink>
                <ButtonLink directionlink="/MyCv" textshowLink= "Sobre mí"></ButtonLink>
            </div>

        </div>
    )

}

export default AboutMe;