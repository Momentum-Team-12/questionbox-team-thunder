import React from 'react'

const QuestionList = (props) => {
    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <h5>Posted:{props.created_at}</h5>
        </>
    )
}

export default QuestionList;