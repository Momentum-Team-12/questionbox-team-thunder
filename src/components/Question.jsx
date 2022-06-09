import { Link } from 'react-router-dom';
import Card from './Card';
const Question = (props) => {

    return (
        <Card>
        <div>
        <Link to={`/question/${props.id}`}>{props.title}</Link>
        <p>Author: {props.author}</p>
        <h5>Posted: {props.created_at}</h5>
        </div>
        </Card>
    )
}

export default Question;

