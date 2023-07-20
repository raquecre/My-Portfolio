import ButtonLink from "./ButtonLink";
import Navbar from "./Navbar";
import ProfileImg from "./ProfileImg";
import SocialNetworks from "./SocialNetworks";

const AboutMe = () => {


    return (
        <div className=" w-[900px] bg-white  shadow-lg rounded-2xl pl-12 pr-12" >
               <Navbar/>
            <div className="flex justify-around">
             
                <div className="flex flex-col justify-center ">
                    <h1 className=" text-xl pt-5">Hola, soy Raquel</h1>
                    <h3 className="font-semibold text-4xl hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400  ">Front-end Developer</h3>
                    <p className="text-sm text-gray-600 mt-4 w-80" >Mi objetivo es conseguir una realidad con una <di className="hover:font-semibold"> accesibilidad universal </di> para todos.</p>
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