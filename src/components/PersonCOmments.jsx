import CardPersonComents from "./CardPersonComents"
import TitleCards from "./TitleCards"

const PersonComents = (props) => {

    return (
        <div className="w-[800px] ">
            <TitleCards titleCards="Opiniones" />
            <div className="grid grid-cols-3 mt-5 gap-5 flex flex-col justify-center ml-5" >
                <CardPersonComents textComment="Lorem ipsum dolor sit amet
            " personComments="Lorem ipsum" />
                <CardPersonComents textComment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, explicabo labore omnis ducimus 
            aspernatur eaque eveniet eum autem 
            " personComments="Lorem ipsum" />
                 <CardPersonComents textComment="Expedita, explicabo labore omnis ducimus 
                  aspernatur eaque eveniet eum autem numquam molestiquo facilis possimus quis molestiae cupiditate.
            " personComments="Lorem ipsum" />
                <CardPersonComents textComment="Lorem ipsum dolor sit amet, coxpedita, explicabo labore omnis ducimus 
            aspernatur eaque eveniet eum autem numquam molestiae? Hic soluta dolore provident quo facilis possimus quis molestiae cupiditate.
            " personComments="Lorem ipsum" />
     <CardPersonComents textComment="Lorem ipsum ovident quo facilis possimus quis molestiae cupiditate.
            " personComments="Lorem ipsum" />
                <CardPersonComents textComment="Lorem ipilis possimus quis molestiae cupiditate.
            " personComments="Lorem ipsum" />



            </div>
        </div>
    )
}

export default PersonComents