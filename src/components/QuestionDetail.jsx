import Card from './Card';
const QuestionDetail = (props) => {

    return (
        <Card>
        <div>
        <h3>Title: {props.title}</h3>
        <p>{props.description}</p>
        <h4>Author: {props.author}</h4>
        <h5>Posted: {props.created_at}</h5>
        </div>
        </Card>
    )
}

export default QuestionDetail;