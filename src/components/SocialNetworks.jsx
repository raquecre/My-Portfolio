import { Link } from "react-router-dom"
import GithubLogo from "./GithubLogo"

const SocialNetworks = () => {


    return (
        <div className=" flex opacity-60 hover:opacity-100 ml-20 gap-10">
            <Link target="_blank" to={"https://www.linkedin.com/in/raquecre/"}>

                <div className="LINKEDIN hover:text-blue-600 hover:italic flex justify-start items-center text-gray-800 ml-8 gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    {/*   <p>raquecre</p> */}
                </div>
            </Link>

            <GithubLogo nameProyect='raquecre' urlgithub={'https://github.com/raquecre/'} />


        </div>

    )
}

export default SocialNetworks