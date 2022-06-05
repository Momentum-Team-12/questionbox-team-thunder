import React from 'react'

const Question = (props) => {
    return (
        <>
        <h4>{props.title}</h4>
        <p>{props.author}</p>
        <h5>Posted: {props.created_at}</h5>
        </>
    )
}

export default Question;