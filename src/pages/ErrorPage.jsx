import Navbar from "../components/Navbar";
import Transitions from "../components/Transitions";

const ErrorPage = () => {


    return (
        <>
            <Transitions>
                <div  className="p-5 bg-gradient-to-r from-blue-400 to-purple-400  flex flex-col items-center">
                    <Navbar/>
                  <p className="text-5xl mt-20 mb-[100px]"> Página no encontrada</p>
                </div>

            </Transitions>
        </>
    )
}


export default ErrorPage;