import { Link } from "react-router-dom";
import GithubLogo from "./GithubLogo";
import LinkLogo from "./LinkLogo";
const CardPorfolio = (props) => {
    const { nameProyect, descriptionProyect, urlImageProyect, urlgithub, urlWebProyect } = props;

    return (

        <div className="bg-white bg-opacity-50 shadow-lg rounded-lg flex flex-col justify-between m-3" >

            <div className="flex">
                <div className="flex  ">
                    <div className="flex flex-col p-3">
                        <h1 className="font-bold text-xl"> {nameProyect}</h1>
                        <p className="text-sm">{descriptionProyect}</p>
                    </div>
                    <div className="w-2/4 pt-3 flex items-center justify-between z-10">
                        <img src={urlImageProyect} />

                    </div>
                </div>


            </div>

            <div className="flex justify-around m-4">
                {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg> */}

                <GithubLogo nameProyect={nameProyect} />


                <LinkLogo nameProyect={nameProyect} urlWebProyect={urlWebProyect} />



            </div>
        </div>
    )
}

export default CardPorfolio