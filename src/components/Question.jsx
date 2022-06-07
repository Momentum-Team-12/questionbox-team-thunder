import { Link } from 'react-router-dom';

const Question = (props) => {
    const handleclick = () => {
        props(props)
    }
    return (
        <>
        <div onClick={handleclick}>
        <Link to={`question/${props}`}>{props.title}</Link>
        <p>Author: {props.author}</p>
        <h5>Posted: {props.created_at}</h5>
        </div>
        </>
    )
}

export default Question;

