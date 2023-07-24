
import { Link } from "react-router-dom"

import GithubLogo from "./GithubLogo"
import ProfileImg from "./ProfileImg"


const Footer = () => {

    return (
        <div className="w-[750px] bg-white bg-opacity-90 shadow-lg rounded-lg mt-20 ml-6  gap-6 p-9 flex flex-col items-start  ">
            <>
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text "> Hablemos</p>
            </>
            <a href="mailto:raquecre@gmail.com">

                <div className=" flex gap-1 items-center hover:underline inline-block hover:text-blue-800 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text hover:italic hover:underline pl-10 p-3 ">
                    <svg className="w- h-5"
                        fill="none" stroke="url(#grad1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#60A5FA" />
                                <stop offset="100%" stopColor="#C084FC" />
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25">
                        </path>
                    </svg>
                    <p >raquecre@gmail.com</p>
                </div>
            </a>
            <div className="flex  justify-around ">
                <div className="TEXTO flex flex-col justify-center ">

                    <div className="flex justify-start mb-7 gap-10">

                        <div className="w-fit flex hover:underline hover:text-blue-700 hover:italic rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 m-1 p-1">

                            <Link target="_blank" to={"https://www.canva.com/design/DAFl07J6mKA/rOj3T_dV8VBVGcYpkFRI-A/view?utm_content=DAFl07J6mKA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
                                <div className="w-fit flex items-center rounded-lg bg-white bg-opacity-90 text-sm p-1 gap-1">
                                    <p>CV</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="w-fit flex hover:underline hover:text-blue-700 hover:italic rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 m-1 p-1">
                            <div className="w-fit flex items-center rounded-lg bg-white bg-opacity-90 text-sm gap-1 p-1">
                                <Link target="_blank" to={"https://github.com/raquecre/My-portfolio"}>
                                    <p>Este portfolio:</p>
                                </Link>
                                <GithubLogo nameProyect={"Portfolio"} urlgithub={"https://github.com/raquecre/My-portfolio"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start mb-7 m-2">
                        <div div className="QR flex justify-around">
                            <div className="flex items-center justify-start gap-10">
                                <Link target="_blank" to={"https://www.canva.com/design/DAFl07J6mKA/rOj3T_dV8VBVGcYpkFRI-A/view?utm_content=DAFl07J6mKA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
                                    <div className=" ">
                                        <img className="w-20" alt="QrCV" src="https://i.imgur.com/XBmRQbx.png" />
                                        <p className="text-xs text-gray-600 ">CV</p>
                                    </div>
                                </Link>

                                <div className="p-1 ">
                                    {/* <Link target="_blank" to={"https://www.canva.com/design/DAFo-gYqAJM/_VCykxVy3DzhdYMHLj27rA/view?utm_content=DAFo-gYqAJM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
                            <div className="flex items-center gap-3 ">
                            <img className="w-10 " src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" /> 
                            <p className=" hover:text-blue-600 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block bg-clip-text hover:italic hover:underline text-lg"> CV</p>
                            </div>
                        </Link> */}
                                </div>
                            </div>

                            <div className="flex justify-around">
                                <Link target="_blank" to={"https://www.linkedin.com/in/raquecre/"}>

                                    <div className="">
                                        <img className="w-20" alt="qrLinkedin" src="https://i.imgur.com/ovuBIY5.png" />
                                        <p className="text-xs text-gray-600 "> linkedin</p>
                                    </div>
                                </Link>

                                <div className="LINKEDIN w-fit text-lg hover:text-blue-600 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block bg-clip-text hover:italic hover:underline flex ml-8 gap-3 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                    {/*   <p className=" w-fit hover:text-blue-600">Linkedin</p> */}
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
                <div className=" w-60 rounded-full ml-20 flex justify-center self-end border-5 border-blue-400 rounded-full ">
                    <ProfileImg />
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <Link target="_blank" to={'https://www.linkedin.com/in/raquecre/'}>
                    <p className="border w-fit p-3 text-sm text-gray-800  flex gap-3 hover:underline inline-block hover:text-blue-400 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400  bg-clip-text hover:italic hover:underline  p-1"> ponme un mensaje en linkedin</p>
                </Link>
            </div>
        </div>
    )
}


export default Footer