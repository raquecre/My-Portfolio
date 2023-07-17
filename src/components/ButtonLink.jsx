import { Link } from "react-router-dom";

const ButtonLink = ({directionlink, textshowLink }) =>{

    return(
        <Link to={directionlink} className=" max-w-xl  m-2 text-xl text-white font-semibold bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg hover:shadow-none hover: bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl p-2">{textshowLink}</Link>
    )
}

export default  ButtonLink;