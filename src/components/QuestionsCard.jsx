const QuestionsCard = (props) =>{
const {titleIconQuestions, infoQuestions} = props
    return(
        <div className="w-2/4 text-white flex flex-col items-center">
            <div className=" mb-3">{titleIconQuestions} </div>
            <p className="text-sm text-justify">{infoQuestions}</p>
        </div>
    )
}

export default QuestionsCard