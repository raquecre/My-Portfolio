import AboutMe from "../components/AboutMe";
import ButtonLink from "../components/ButtonLink";
import CardPorfolio from "../components/CardPorfolio";
import Footer from "../components/Footer";
import MiniPorfolio from "../components/MiniPortfolio";
import Navbar from "../components/Navbar";
import Questions from "../components/Questions";
import TitleCards from "../components/TitleCards";
import Transitions from "../components/Transitions";

const Home = (props) => {
    const pokedexImage = 'https://www.mundodeportivo.com/alfabeta/hero/2019/09/pokemon-pokedex-pikachu.jpg?width=1200&aspect_ratio=16:9';

    return (

        <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-400">
            <Transitions>
                <div className="p-20 flex flex-col items-center">
                    <AboutMe />
                    <Questions />
                    <MiniPorfolio />
                    <Footer />
                </div>
            </Transitions >

        </div>

    )
}


export default Home;