const ContactForm = (props) => {
const {typeLabel, textPlaceholder, titleLabel} = props;

    return(
        <div className=" flex flex-col">
            <label>{titleLabel}</label>
            <input type={typeLabel} placeholder={textPlaceholder} required/>
        </div>
    )
}

export default ContactForm