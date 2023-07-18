import LinkCVPDF from "./LinkCVPDF"
import { Link } from "react-router-dom"


const Footer = () => {


    return (
        <div className="max-w-4xl bg-white bg-opacity-60 shadow-lg rounded-lg mt-12 p-5 gap-6 items-center justify-items-center grid grid-cols-2">

            <>
                <div className="flex items-center gap-4">
                    <img className="w-2/4" src="https://i.imgur.com/XBmRQbx.png" />
                    <p  className="text-sm">Accede a mi CV</p>
                </div>

                <div className="flex items-center gap-4">
                    <img className="w-2/4" src="https://i.imgur.com/ovuBIY5.png" />
                    <p className="text-sm">Encuentrame en linkedin</p>
                </div>
            </>

            <div className="p-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl shadow-lg hover:shadow-none">
                <Link target="_blank" to={"https://www.canva.com/design/DAFo-gYqAJM/_VCykxVy3DzhdYMHLj27rA/view?utm_content=DAFo-gYqAJM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
                    <div className="flex items-center gap-3 ">
                        <img className="w-10 " src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" />
                        <p className="hover:underline hover:text-blue-700 text-s"> CV</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}


export default Footer