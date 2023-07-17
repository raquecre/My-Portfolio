import AboutMe from "../components/AboutMe";
import ButtonLink from "../components/ButtonLink";
import CardPorfolio from "../components/CardPorfolio";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Transitions from "../components/Transitions";

const Home = (props) => {
    const pokedexImage = 'https://www.mundodeportivo.com/alfabeta/hero/2019/09/pokemon-pokedex-pikachu.jpg?width=1200&aspect_ratio=16:9';

    return (
        <>


            <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-400">
                <Transitions>
                    <div className="p-20">
                        <AboutMe />
                        <TitleCards titleCards="Portfolio" />
                        <CardPorfolio urlgithub='https://github.com/raquecre/react-context-ex3-Pokeapi' nameProyect="Pokedex" descriptionProyect='prueba prueba prueba prueba prueba' urlImageProyect={pokedexImage} />
                        <CardPorfolio urlgithub='https://github.com/raquecre/react-context-ex3-Pokeapi' nameProyect="Pokedex" descriptionProyect='prueba prueba prueba prueba prueba' urlImageProyect={pokedexImage} />
                        <ButtonLink directionlink='/AllProyects' textshowLink='Seguir viendo' />
                    </div>

                </Transitions >
            </div>
        </>
    )
}


export default Home;