import AboutMe from "../components/AboutMe";

import Footer from "../components/Footer";
import MiniPorfolio from "../components/MiniPortfolio";

import PersonComents from "../components/PersonCOmments";
import Questions from "../components/Questions";

import Transitions from "../components/Transitions";

const Home = () => {
 

    return (

        <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-400">

            <div className="p-20 flex flex-col items-center">
                <AboutMe />
                <Transitions>
                    <Questions />
                    <MiniPorfolio />
                    <PersonComents/>
                    <Footer />
                </Transitions >
            </div>

        </div>

    )
}


export default Home;