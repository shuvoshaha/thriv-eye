import React from 'react'

const Button = (props: any,) => {
    return (
        <button
            className={`te__btn ${ props.class }`}        
            {...props}
        />
    )
}

export default Button