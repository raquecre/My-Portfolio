import { Link } from "react-router-dom";

const ButtonLink = ({directionlink, textshowLink }) =>{

    return(
        <Link to={directionlink} className=" mb-2 text-xl text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg hover:shadow-none rounded-xl p-2">{textshowLink}</Link>
    )
}

export default  ButtonLink;