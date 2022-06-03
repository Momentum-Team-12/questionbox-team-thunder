import React from 'react'

const Question = (props) => {
    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h5>Posted: {props.created_at}</h5>
        </>
    )
}

export default Question;