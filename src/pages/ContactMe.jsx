import ContactForm from "../components/ContactFormText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Transitions from "../components/Transitions";

const ContactMe = () => {
    //const {typeLabel, textPlaceholder, titleLabel} = props;


    return (
        <div className="w-[800px] p-10 bg-gradient-to-r from-blue-400 to-purple-400">

            <div className="flex flex-col items-center" >

                <Navbar />
                <Transitions>
                    <TitleCards titleCards='Contacto:' />
                    <div className="w-[800px] m-5 flex flex-col bg-white bg-opacity-50 shadow-lg rounded-lg p-5 gap-6 items-center justify-items-center">
                        <ContactForm typeLabel='email' textPlaceholder='introduce tu email' titleLabel='Email' />
                        <ContactForm typeLabel='text' textPlaceholder='nombre' titleLabel='Nombre ' />
                        <div>
                            <label className="Tu mensaje"></label>
                            <textarea placeholder="Cuéntame tu propuesta"></textarea>
                        </div>
                    </div>
                    <Footer/>
                </Transitions >
            </div>
        </div>
    )
}

export default ContactMe