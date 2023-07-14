import ButtonNav from "./ButtonNav";
import ProfileImg from "./ProfileImg";

const Navbar = () => {


    return (
        <div className=" flex justify-around p-5">

            <ButtonNav textInfoNav='Sobre mí' />
            <>
                <ButtonNav textInfoNav='Conocimientos' />
                <ButtonNav textInfoNav='PortFolio' />
                <div className="w-20">
                    <ButtonNav textInfoNav={<ProfileImg />} />

                </div>

            </>



        </div>
    )
}


export default Navbar;