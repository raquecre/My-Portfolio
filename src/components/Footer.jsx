import ButtonLink from "./ButtonLink"
import LinkCVPDF from "./LinkCVPDF"
import { Link } from "react-router-dom"


const Footer = () => {


    return (
        <div className="max-w-4xl bg-white bg-opacity-60 shadow-lg rounded-lg mt-12 p-5 gap-6 items-center justify-items-start grid grid-cols-2">


            <div className="flex items-center gap-4">
                <img className="w-1/4" src="https://i.imgur.com/XBmRQbx.png" />
                <p className="text-sm">Accede a mi CV</p>
            </div>

            <div className="p-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-lg hover:italic hover:shadow-none">
                <Link target="_blank" to={"https://www.canva.com/design/DAFo-gYqAJM/_VCykxVy3DzhdYMHLj27rA/view?utm_content=DAFo-gYqAJM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
                    <div className="flex items-center gap-3 ">
                        <img className="w-10 " src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" />
                        <p className="hover:underline hover:text-blue-700 text-s"> CV</p>
                    </div>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <img className="w-1/4" src="https://i.imgur.com/ovuBIY5.png" />
                <p className="text-sm">Encuentrame en linkedin</p>
            </div>

            <ButtonLink textshowLink={<div className="LINKEDIN  hover:text-blue-600 hover:italic hover:underline flex text-blue-800 ml-8 gap-3 items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                  <p>Link</p> 
            </div>} />


        </div>
    )
}


export default Footer