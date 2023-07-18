import { Link } from "react-router-dom"


const LinkCVPDF = () => {
    <>
        <Link target="_blank" to={"https://www.canva.com/design/DAFo-gYqAJM/_VCykxVy3DzhdYMHLj27rA/view?utm_content=DAFo-gYqAJM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
            <div className="flex items-center gap-3">
                <img className="w-10 " src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" />
                <p className="hover:underline hover:text-blue-700">Aquí te dejo mi curriculum para descargar</p>
            </div>
        </Link>
    </>
}

export default LinkCVPDF