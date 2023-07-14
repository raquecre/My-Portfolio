import ButtonLink from "./ButtonLink";
import Navbar from "./Navbar";
import ProfileImg from "./ProfileImg";
import SocialNetworks from "./SocialNetworks";

const AboutMe = () => {


    return (
        <div className="bg-white bg-opacity-50 shadow-lg  p-10 rounded" >
            
            <div className="flex justify-between">

                <div className="flex flex-col justify-center ">
                    <h1 className=" text-xl pt-5">Hola, soy Raquel</h1>
                    <h3 className="font-semibold text-4xl ">Front-end Developer</h3>
                </div>
                <div className="w-1/4">
                    <ProfileImg />
                </div>

            </div>
            <SocialNetworks/>

            <div className="flex gap-10 m-10">
                <ButtonLink directionlink="/" textshowLink= "Contacto"></ButtonLink>
                <ButtonLink directionlink="/" textshowLink="Portfolio"></ButtonLink>
            </div>

        </div>
    )

}

export default AboutMe;