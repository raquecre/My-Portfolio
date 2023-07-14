import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Portfolio from "./PortFolio";

const Home = (props) => {

    return (
        <body className="bg-gradient-to-r from-blue-300 to-purple-300">
                
            <div className="p-20">
                <AboutMe/>
                <Portfolio />
            </div>

        </body>
    )
}


export default Home;