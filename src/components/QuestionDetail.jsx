import Card from './Card';
import classes from '../pages/AskForm.module.css';
import { useParams } from "react-router-dom";

const QuestionDetail = (props) => {
   




    return (
        <Card>
        <div>
        <h3>Title: {props.title}</h3>
        <p>{props.description}</p>
        <h4>Author: {props.author}</h4>
        <h5>Posted: {props.created_at}</h5>
        </div>
        <div className={classes.actions}>
            <button>Add as Favorite</button>
        </div>
        </Card>
    )
}

export default QuestionDetail;