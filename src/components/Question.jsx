import { Link } from 'react-router-dom';

const Question = (props) => {

    return (
        <div>
        <Link to={`/question/${props.id}`}>{props.title}</Link>
        <p>Author: {props.author}</p>
        <h5>Posted: {props.created_at}</h5>
        </div>
    )
}

export default Question;

