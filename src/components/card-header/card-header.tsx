import React from 'react'
import './card-header.scss'

const CardHeader = (props: any) => {
    return (
        <div className='te__card--header'>
            <div className="card__header--title"> {props.title} </div>
        </div>
    )
}

export default CardHeader