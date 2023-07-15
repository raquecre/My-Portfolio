import CardPorfolio from "./CardPorfolio"

const TitleCards = ({titleCards}) => {

    return (
        
            <div className="headerPortfolio flex justify-between pt-5" >
                <h1 className="font-semibold text-white text-2xl">{titleCards}</h1>
            </div>

     
    )
}

export default TitleCards