const ButtoncardPortfolio = (props) => {
    const { contentButtonPortfolio } = props

    return (
        <div className="w-fit hover:underline hover:text-blue-700 hover:italic rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 mt-8 p-1 pb-0">
        <div className="w-fit flex items-center rounded-3xl bg-white bg-opacity-80 p-1">
        <>{contentButtonPortfolio}</>
            <p className="">Resultado</p>
        </div>
    </div>
    )
}

export default ButtoncardPortfolio