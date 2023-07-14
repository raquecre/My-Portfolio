import { Link } from "react-router-dom";

const ButtonLink = ({directionlink, textshowLink }) =>{

    return(
        <Link to={directionlink} className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg hover:shadow-none rounded-xl p-2">{textshowLink}</Link>
    )
}

export default  ButtonLink;