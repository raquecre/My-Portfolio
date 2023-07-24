import AboutMe from "../components/AboutMe";

import Footer from "../components/Footer";
import MiniPorfolio from "../components/MiniPortfolio";

import PersonComents from "../components/PersonCOmments";
import Questions from "../components/Questions";

import Transitions from "../components/Transitions";

const Home = (props) => {
    const pokedexImage = 'https://www.mundodeportivo.com/alfabeta/hero/2019/09/pokemon-pokedex-pikachu.jpg?width=1200&aspect_ratio=16:9';

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