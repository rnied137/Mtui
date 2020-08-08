import React from 'react'
import "./Button.css"


const SIZES = ["btn-medium", "btn-big", "btn-small"];

const STYLES = [
    "btn-primary",
    "btn-secondary",
    "btn-primary-border"
    
];




const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,

}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize : SIZES[0];


    return (
        <div>
            <button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </div>

    )
}

export default Button;