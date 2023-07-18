const QuestionsCard = (props) =>{
const {titleIconQuestions, infoQuestions} = props
    return(
        <div className="w-30 text-white flex flex-col items-center">
            <div className="text-3xl font-bold mb-3">{titleIconQuestions} </div>
            <p className="text-sm text-justify">{infoQuestions}</p>
        </div>
    )
}

export default QuestionsCard