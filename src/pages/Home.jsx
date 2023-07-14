import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";

const Home = () => {


    return (
        <body className="bg-gradient-to-r from-blue-300 to-purple-300">

                <Navbar/>
            <div className="p-20">
                <AboutMe />
            </div>

        </body>
    )
}


export default Home;