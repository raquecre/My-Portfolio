const CardPersonComents = (props) => {
    const {textComment, personComments} = props


    return(
        <div className="personComment border-4 bg-white bg-opacity-40 hover:bg-opacity-0 border-dashed hover:border-solid rounded-2xl text-white p-5 flex flex-col justify-center ">
            <p className="text-sm text-center font-bold ">{textComment}</p>
            <p className="font-semibold text-xs flex justify-center mt-3">{personComments}</p>
        </div>
    )
}

export default CardPersonComents