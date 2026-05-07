import React from 'react'

const Student = (props) => {
    return (
        <div class="student">
            <h2>{props.name}</h2>
            <h2>{props.course}</h2>
            <h2>{props.marks}</h2>
        </div>
    )
}

export default Student