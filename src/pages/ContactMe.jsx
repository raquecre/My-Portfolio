import ContactForm from "../components/ContactFormText";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Transitions from "../components/Transitions";

const ContactMe = () => {
    //const {typeLabel, textPlaceholder, titleLabel} = props;


    return (
        <>

            <div className="bg-gradient-to-r from-blue-400 to-purple-400">

                <Navbar />
                <Transitions>
                    <TitleCards titleCards='Hablemos:' />
                    <div className="max-w-2xl m-5 flex flex-col bg-white bg-opacity-50 shadow-lg rounded-lg grid grid-cols-3 p-5 gap-6 items-center justify-items-center">
                        <ContactForm typeLabel='email' textPlaceholder='introduce tu email' titleLabel='Email' />
                        <ContactForm typeLabel='text' textPlaceholder='nombre' titleLabel='Nombre ' />


                    </div>
                </Transitions >
            </div>
        </>
    )
}

export default ContactMe