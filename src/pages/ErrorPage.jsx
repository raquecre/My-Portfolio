import ButtonLink from "../components/ButtonLink";
import Navbar from "../components/Navbar";
import Transitions from "../components/Transitions";
import Footer from "../components/Footer";


const ErrorPage = () => {


    return (
        <>
            <Transitions>

                <div className=" p-5 bg-gradient-to-r from-blue-400 to-purple-400  flex flex-col items-center h-[950px]">
                    <Navbar />
                    <img className="w-[800px]" src="https://i.imgur.com/IlxasbV.png" alt="" srcset="" />

                    <div className=" w-[700px] flex justify-end mt-0">
                        <ButtonLink directionlink={"/"} textshowLink={" Vuelve a Home"} />

                    </div>
           {/*          <Footer /> */}
                </div>
            </Transitions>
        </>
    )
}


export default ErrorPage;