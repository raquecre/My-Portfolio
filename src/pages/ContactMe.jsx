import ContactForm from "../components/ContactFormText";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";

const ContactMe = () => {
    //const {typeLabel, textPlaceholder, titleLabel} = props;


    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-400">
            <Navbar/>
            <TitleCards titleCards='Hablemos:' />
            <div className=" flex flex-col bg-white bg-opacity-50 shadow-lg rounded-lg grid grid-cols-3 p-5 gap-6 items-center justify-items-center">
                <ContactForm typeLabel='email' textPlaceholder='introduce tu email' titleLabel='Email' />
                <ContactForm typeLabel='text' textPlaceholder='nombre' titleLabel='Nombre ' />


            </div>
        </div>
    )
}

export default ContactMe