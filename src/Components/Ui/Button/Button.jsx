import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ style, value = 'boton', method }) => {
    return (
        <button onClick={method} className={style}>
            {value}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}