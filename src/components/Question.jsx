import { Link } from 'react-router-dom';

const Question = (props, questionId, setSelected) => {
   
    
    const handleclick = () => {
        setSelected(questionId)
    }
    return (
        <>
        <div onClick={handleclick}>
        <Link to={`question/${questionId}`}>{props.title}</Link>
        <p>Author: {props.author}</p>
        <h5>Posted: {props.created_at}</h5>
        </div>
        </>
    )
}

export default Question;

