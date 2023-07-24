import { Link } from "react-router-dom";
import GithubLogo from "./GithubLogo";
import LinkLogo from "./LinkLogo";
const CardPorfolio = (props) => {
    const { nameProyect, descriptionProyect, urlImageProyect, urlgithub, urlWebProyect } = props;

    return (

        <div className="w-[800px] min-w-sm bg-white bg-opacity-80 shadow-lg rounded-2xl  p-10 mt-3 mb-8" >

            <div className="grid grid-cols-2 items-center justify-items-center  ">
                <div className=" p-3 ">
                    <h1 className="font-bold pb-4 text-xl"> {nameProyect}</h1>
                    <p className="text-xs  pr-5">{descriptionProyect}</p>

                    <div className="flex gap-8">

                        <div className="w-fit hover:underline hover:text-blue-700 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 mt-8 p-1">
                            <div className="w-fit flex items-center rounded-lg bg-white bg-opacity-80 p-1">
                                <GithubLogo nameProyect={nameProyect} urlgithub={urlgithub} />
                            </div>
                        </div>
                        {/* //TODO aquí hay que añadir para poder poner un enlace y que esa info se pase por props */}
                        <div className="w-fit flex hover:underline hover:text-blue-700 hover:italic rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 mt-8 p-1">
                            <div className="w-fit flex items-center rounded-lg bg-white bg-opacity-80 text-sm p-1">
                                web
                            </div>
                        </div>
                                             
                    </div>


                </div>

                <div className="m-5 h-50 w-50 rounded-lg">
                    <img className=" object-none rounded-3xl object-left-top hover:object-scale-down" src={urlImageProyect} />
                </div>
            </div>




            <div className="flex justify-around mb-4 pb-2">
                {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg> */}


            </div>

        </div>
    )
}

export default CardPorfolio